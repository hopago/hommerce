import { NextFunction } from "express-serve-static-core";
import {
  calculateEachPert,
  findMostFrequentKeyword,
} from "../utils/calculate-total";
import ReviewTotal from "../models/review-total";
import { HttpException } from "../../../middleware/error/utils";
import Review from "../../models/review";

type HandleDeleteTotalParams = {
  bookId: string;
  keyword: ReviewKeywords;
  rating: ReviewRatingType;
};

export const handleDeleteTotal = async (
  { bookId, keyword, rating }: HandleDeleteTotalParams,
  next: NextFunction
) => {
  try {
    const prevTotal = await ReviewTotal.findOne({ bookId });
    if (!prevTotal) throw new HttpException(404, "Review Total not found.");

    const reviewLength = await Review.countDocuments({ bookId });
    if (reviewLength < 1)
      throw new HttpException(400, "Invalid review length.");

    const ratingValue = Number(rating as ReviewRatingType) as ReviewRatingValue;

    const newRecordedRating: Record<ReviewRatingType, number> = {
      ...prevTotal.recordedRating,
      [rating]: Math.max(
        (prevTotal.recordedRating[rating as ReviewRatingType] || 1) - 1,
        0
      ),
    };

    const newTotalRating =
      reviewLength === 1
        ? 0
        : (prevTotal.totalRating * reviewLength - ratingValue) /
          (reviewLength - 1);

    const newRatingEachPert = calculateEachPert(
      newRecordedRating,
      reviewLength - 1
    );

    const newRecordedKeyword: Record<ReviewKeywords, number> = {
      ...prevTotal.recordedKeyword,
      [keyword]: Math.max((prevTotal.recordedKeyword[keyword] || 1) - 1, 0),
    };

    const newTotalKeyword = findMostFrequentKeyword(
      newRecordedKeyword
    ) as ReviewKeywords;

    const newKeywordEachPert = calculateEachPert(
      newRecordedKeyword,
      reviewLength - 1
    );

    prevTotal.recordedRating = newRecordedRating;
    prevTotal.totalRating = newTotalRating;
    prevTotal.ratingEachPert = newRatingEachPert;
    prevTotal.recordedKeyword = newRecordedKeyword;
    prevTotal.totalKeyword = newTotalKeyword;
    prevTotal.keywordEachPert = newKeywordEachPert;

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
