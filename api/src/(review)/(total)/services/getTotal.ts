import { NextFunction, Request } from "express";
import ReviewTotal, { IReviewTotal } from "../models/review-total";

export const handleGetTotal = async (
  { bookId }: { bookId: string },
  next: NextFunction
) => {
  try {
    const { totalRating, totalKeyword } = (await ReviewTotal.findOne({
      bookId,
    })) as IReviewTotal;

    return { totalRating, totalKeyword };
  } catch (err) {
    next(err);
  }
};
