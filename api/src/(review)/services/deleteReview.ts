import { NextFunction } from "express";
import Review, { IReview } from "../models/review";

export const handleDeleteReview = async (
  { bookId, userId }: { bookId: string; userId: string },
  next: NextFunction
) => {
  try {
    const deletedReview = (await Review.findOneAndDelete({
      bookId,
      userId,
    })) as IReview;

    return deletedReview._id;
  } catch (err) {
    next(err);
  }
};
