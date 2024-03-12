import { NextFunction } from "express";
import Review from "../models/review";

export const handleDeleteReviewById = async (
  reviewId: string,
  next: NextFunction
) => {
  try {
    await Review.findByIdAndDelete(reviewId);
  } catch (err) {
    next(err);
  }
};
