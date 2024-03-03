import { NextFunction } from "express";
import Review, { IReview } from "../models/review";
import { handleDeleteTotal } from "../(total)/services/deleteTotal";
import { handleDatabaseOperation } from "../../utils/db-operation";
import { HttpException } from "../../middleware/error/utils";

export const handleDeleteReview = async (
  { bookId, userId }: { bookId: string; userId: string },
  next: NextFunction
) => {
  try {
    const foundReview = await Review.findOne({
      bookId,
      userId,
    });
    if (!foundReview) throw new HttpException(404, "Review not found.");

    await handleDatabaseOperation(
      handleDeleteTotal(
        { bookId, rating: foundReview.rating, keyword: foundReview.keyword },
        next
      ),
      next
    );

    const deletedReview = (await handleDatabaseOperation(
      foundReview.deleteOne(),
      next
    )) as IReview;

    return deletedReview._id;
  } catch (err) {
    next(err);
  }
};
