import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../middleware/error/utils";
import Book from "../models/book";

export const increaseView = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;
    if (!bookId || bookId === "undefined")
      throw new HttpException(400, "Book Id required.");

    await Book.findByIdAndUpdate(bookId, {
      $inc: { views: 1 },
    });
  } catch (err) {
    next(err);
  }
};
