import { NextFunction, Request } from "express";
import ReviewReply, { IReviewReply } from "../models/review-reply";

export const handleDeleteReply = async (req: Request, next: NextFunction) => {
  try {
    const { _id } = (await ReviewReply.findOneAndDelete({
      userId: req.body.userId,
      reviewId: req.params.reviewId,
    })) as IReviewReply;

    return _id;
  } catch (err) {
    next(err);
  }
};
