import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import Book from "../models/book";

export const handleDeleteBook = async (req: Request, next: NextFunction) => {
  const { id } = req.body;
  if (!id) throw new HttpException(400, "Id is required.");

  try {
    await Book.findByIdAndDelete(id);
  } catch (err) {
    next(err);
  }
};
