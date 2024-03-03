import { NextFunction } from "express";
import ReviewReply from "../models/review-reply";
import { HttpException } from "../../../middleware/error/utils";

export const handleGetReplies = async (
  { reviewId }: { reviewId: string },
  next: NextFunction
) => {
  try {
    const replies = await ReviewReply.findOne({ reviewId });
    if (!replies) throw new HttpException(404, "Replies not found.");

    return replies;
  } catch (err) {
    next(err);
  }
};
