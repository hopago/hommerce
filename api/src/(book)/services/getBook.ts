import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import Book from "../models/book";

export const handleGetBook = async (req: Request, next: NextFunction) => {
  const { bookId } = req.params;
  if (!bookId) throw new HttpException(400, "Book id required.");

  try {
    const book = await Book.findById(bookId);

    return book;
  } catch (err) {
    next(err);
  }
};
