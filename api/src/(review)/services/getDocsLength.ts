import { NextFunction } from "express";
import Review from "../models/review";

export const handleGetDocsLength = async (
  { bookId }: { bookId: string },
  next: NextFunction
) => {
  try {
    const docsLength = await Review.countDocuments({
      bookId,
    });

    return docsLength;
  } catch (err) {
    next(err);
  }
};
