import { NextFunction } from "express";
import ReviewTotal from "../models/review-total";
import { HttpException } from "../../../middleware/error/utils";

export const handleGetTotal = async (
  { bookId }: { bookId: string },
  next: NextFunction
) => {
  try {
    const reviewTotal = await ReviewTotal.findOne({
      bookId,
    });
    if (!reviewTotal) throw new HttpException(404, "Review total not found.");

    const { totalRating, totalKeyword } = reviewTotal;

    return { totalRating, totalKeyword };
  } catch (err) {
    next(err);
  }
};
