import { NextFunction, Request } from "express";
import { isFieldsFullFilled } from "../../utils/isFieldsFullFilled";
import Review from "../models/review";

export const handlePostReview = async (req: Request, next: NextFunction) => {
  const fields = ["buyWay", "bookId", "username", "rating", "keyword", "desc"];

  isFieldsFullFilled(fields, req);

  const newReview = new Review({
    ...req.body,
    userId: req.params.userId,
  });

  try {
    const savedReview = await newReview.save();

    return savedReview;
  } catch (err) {
    next(err);
  }
};
