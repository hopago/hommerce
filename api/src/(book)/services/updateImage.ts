import { NextFunction } from "express";
import Book from "../models/book";
import { HttpException } from "../../middleware/error/utils";

export const handleUpdateImage = async (
  {
    bookId,
    imageUrl,
    updatedImageUrl,
  }: { bookId: string; imageUrl: string; updatedImageUrl: string },
  next: NextFunction
) => {
  try {
    const updatedBook = await Book.findById(bookId);
    if (!updatedBook) throw new HttpException(404, "Book not found.");

    const findIdx = updatedBook.images?.findIndex((i) => i === imageUrl);
    if (findIdx === -1) throw new HttpException(404, "Image not found.");

    if (findIdx === 0 || findIdx) {
      try {
        updatedBook.images?.splice(findIdx, 1, updatedImageUrl);
        const savedBook = await updatedBook.save();

        return savedBook;
      } catch (err) {
        next(err);
      }
    }
  } catch (err) {
    next(err);
  }
};
