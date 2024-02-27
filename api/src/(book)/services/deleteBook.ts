import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import Book from "../models/book";
import BookDetails from "../(details)/models/detail";

export const handleDeleteBook = async (req: Request, next: NextFunction) => {
  const { bookId } = req.params;
  if (!bookId) throw new HttpException(400, "Book id required.");

  try {
    await Book.findByIdAndDelete(bookId);
  } catch (err) {
    next(err);
  }

  try {
    await BookDetails.findOneAndDelete({
      bookId: bookId,
    });
  } catch (err) {
    next(err);
  }
};
