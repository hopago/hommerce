import { NextFunction, Request } from "express";
import { isFieldsFullFilled } from "../../../utils/isFieldsFullFilled";
import ReviewReply from "../models/review-reply";

export const handlePostReply = async (req: Request, next: NextFunction) => {
  const fields = ["userId", "username", "desc"];

  isFieldsFullFilled(fields, req);

  const newReply = new ReviewReply({
    ...req.body,
    reviewId: req.params.reviewId,
  });

  try {
    const savedReply = await newReply.save();

    return savedReply;
  } catch (err) {
    next(err);
  }
};
