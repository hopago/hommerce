import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import Book from "../models/book";

export const handleGetBook = async (req: Request, next: NextFunction) => {
  const { id } = req.params;
  if (!id) throw new HttpException(400, "Book id required.");

  try {
    const book = await Book.findById(id);

    return book;
  } catch (err) {
    next(err);
  }
};
