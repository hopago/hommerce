import { NextFunction } from "express";
import ReviewReply from "../models/review-reply";

export const handleGetReplies = async (
  { reviewId }: { reviewId: string },
  next: NextFunction
) => {
  try {
    const replies = await ReviewReply.findOne({ reviewId });

    return replies;
  } catch (err) {
    next(err);
  }
};
