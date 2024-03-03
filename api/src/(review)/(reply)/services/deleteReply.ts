import { NextFunction, Request } from "express";
import ReviewReply, { IReviewReply } from "../models/review-reply";
import { HttpException } from "../../../middleware/error/utils";

export const handleDeleteReply = async (
  { userId, reviewId }: { userId: string; reviewId: string },
  next: NextFunction
) => {
  try {
    const deletedReply = (await ReviewReply.findOneAndDelete({
      userId,
      reviewId,
    })) as IReviewReply;
    if (!deletedReply) throw new HttpException(404, "Reply not found.");

    return deletedReply._id;
  } catch (err) {
    next(err);
  }
};
