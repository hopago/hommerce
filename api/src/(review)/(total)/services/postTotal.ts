import { NextFunction, Request } from "express";
import Review from "../../models/review";
import { isFieldsFullFilled } from "../../../utils/isFieldsFullFilled";
import ReviewTotal, { IReviewTotal } from "../models/review-total";
import { isValidKeyword, isValidRating } from "../utils/isValid";
import { HttpException } from "../../../middleware/error/utils";
import {
  calculateEachPert,
  findMostFrequentKeyword,
} from "../utils/calculate-total";

export const handlePostTotal = async (req: Request, next: NextFunction) => {
  const fields = ["rating", "keyword"];

  isFieldsFullFilled(fields, req);

  const {
    rating,
    keyword,
  }: {
    rating: ReviewRatingType;
    keyword: ReviewKeywords;
  } = req.body;

  if (!isValidRating(rating) || !isValidKeyword(keyword)) {
    throw new HttpException(400, "Invalid rating or keyword.");
  }

  const ratingValue = Number(rating as ReviewRatingType) as ReviewRatingValue;

  const reviewLength = await Review.countDocuments({
    bookId: req.params.bookId,
  });

  if (reviewLength === 1) {
    const newReviewTotal = new ReviewTotal({
      bookId: req.params.bookId,
      recordedRating: {
        [rating]: 1,
      },
      totalRating: ratingValue,
      ratingEachPert: {
        [rating]: 100,
      },
      recordedKeyword: {
        [keyword]: 1,
      },
      totalKeyword: keyword,
      keywordEachPert: {
        [keyword]: 100,
      },
    });

    try {
      await newReviewTotal.save();
    } catch (err) {
      next(err);
    }

    return {
      totalRating: newReviewTotal.totalRating,
      ratingEachPert: newReviewTotal.ratingEachPert,
      totalKeyword: newReviewTotal.totalKeyword,
      keywordEachPert: newReviewTotal.keywordEachPert,
    };
  } else {
    const prevTotal = await ReviewTotal.findOne({ bookId: req.params.bookId });
    if (!prevTotal) throw new HttpException(404, "Review Total not found.");

    const {
      recordedRating: prevRecordedRating,
      totalRating: prevTotalRating,
      recordedKeyword: pervRecordedKeyword,
    } = prevTotal as IReviewTotal;

    const newRecordedRating: Record<ReviewRatingType, number> = {
      ...prevRecordedRating,
      [rating]: (prevRecordedRating[rating as ReviewRatingType] || 0) + 1,
    };
    const newRecordedKeyword: Record<ReviewKeywords, number> = {
      ...pervRecordedKeyword,
      [keyword]: (pervRecordedKeyword[keyword] || 0) + 1,
    };

    const newTotalRating =
      (prevTotalRating * (reviewLength - 1) + ratingValue) / reviewLength;
    const newTotalKeyword = findMostFrequentKeyword(
      newRecordedKeyword
    ) as ReviewKeywords;

    const newRatingEachPert = calculateEachPert(
      newRecordedRating,
      reviewLength
    );
    const newKeywordEachPert = calculateEachPert(
      newRecordedKeyword,
      reviewLength
    );

    prevTotal.recordedRating = newRecordedRating;
    prevTotal.totalRating = newTotalRating;
    prevTotal.ratingEachPert = newRatingEachPert;
    prevTotal.recordedKeyword = newRecordedKeyword;
    prevTotal.totalKeyword = newTotalKeyword;
    prevTotal.keywordEachPert = newKeywordEachPert;

    try {
      await prevTotal.save();
    } catch (err) {
      next(err);
    }

    return {
      totalRating: prevTotal.totalRating,
      ratingEachPert: prevTotal.ratingEachPert,
      totalKeyword: prevTotal.totalKeyword,
      keywordEachPert: prevTotal.keywordEachPert,
    };
  }
};
