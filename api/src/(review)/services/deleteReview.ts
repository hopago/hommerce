import { NextFunction } from "express";
import Review, { IReview } from "../models/review";
import { handleDeleteTotal } from "../(total)/services/deleteTotal";

export const handleDeleteReview = async (
  { bookId, userId }: { bookId: string; userId: string },
  next: NextFunction
) => {
  try {
    const foundReview = (await Review.findOne({
      bookId,
      userId,
    })) as IReview;

    try {
      await handleDeleteTotal(
        { bookId, rating: foundReview.rating, keyword: foundReview.keyword },
        next
      );
    } catch (err) {
      next(err);
    }

    try {
      await foundReview.deleteOne();

      return foundReview._id;
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};
