import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import Book from "../models/book";

export const handleGetBook = async (req: Request, next: NextFunction) => {
  const { id } = req.body;
  if (!id) throw new HttpException(400, "Id is required.");

  try {
    const book = await Book.findById(id);

    return book;
  } catch (err) {
    next(err);
  }
};
