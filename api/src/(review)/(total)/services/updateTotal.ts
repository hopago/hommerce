import { NextFunction, Request } from "express";
import { validateFields } from "../../../utils/validateFields";
import { HttpException } from "../../../middleware/error/utils";
import {
  calculateEachPert,
  findMostFrequentKeyword,
} from "../utils/calculate-total";
import ReviewTotal from "../models/review-total";
import Review from "../../models/review";

export const handleUpdateTotal = async (req: Request, next: NextFunction) => {
  const updatedFields = ["rating", "keyword"];

  validateFields(updatedFields, req);

  const {
    rating,
    keyword,
  }: {
    rating?: ReviewRatingType;
    keyword?: ReviewKeywords;
  } = req.body;

  if (!rating && !keyword)
    throw new HttpException(400, "Rating & Keyword missing.");

  try {
    const prevTotal = await ReviewTotal.findOne({ bookId: req.params.bookId });
    if (!prevTotal) throw new HttpException(404, "Review Total not found.");

    const reviewLength = await Review.countDocuments({
      bookId: req.params.bookId,
    });
    if (reviewLength <= 0)
      throw new HttpException(400, "Invalid review length.");

    if (rating) {
      const ratingValue = Number(
        rating as ReviewRatingType
      ) as ReviewRatingValue;
      const newRecordedRating: Record<ReviewRatingType, number> = {
        ...prevTotal.recordedRating,
        [rating]:
          (prevTotal.recordedRating[rating as ReviewRatingType] || 0) + 1,
      };
      const newTotalRating =
        (prevTotal.totalRating * (reviewLength - 1) + ratingValue) /
        reviewLength;
      const newRatingEachPert = calculateEachPert(
        newRecordedRating,
        reviewLength
      );

      prevTotal.recordedRating = newRecordedRating;
      prevTotal.totalRating = newTotalRating;
      prevTotal.ratingEachPert = newRatingEachPert;
    }

    if (keyword) {
      const newRecordedKeyword: Record<ReviewKeywords, number> = {
        ...prevTotal.recordedKeyword,
        [keyword]: (prevTotal.recordedKeyword[keyword] || 0) + 1,
      };
      const newTotalKeyword = findMostFrequentKeyword(
        newRecordedKeyword
      ) as ReviewKeywords;
      const newKeywordEachPert = calculateEachPert(
        newRecordedKeyword,
        reviewLength
      );

      prevTotal.recordedKeyword = newRecordedKeyword;
      prevTotal.totalKeyword = newTotalKeyword;
      prevTotal.keywordEachPert = newKeywordEachPert;
    }

    await prevTotal.save();

    return {
      totalRating: prevTotal.totalRating,
      ratingEachPert: prevTotal.ratingEachPert,
      totalKeyword: prevTotal.totalKeyword,
      keywordEachPert: prevTotal.keywordEachPert,
    };
  } catch (err) {
    next(err);
  }
};
