import { NextFunction } from "express";
import Book from "../models/book";
import { HttpException } from "../../middleware/error/utils";

export const handleDeleteImage = async (
  { bookId, deletedImageUrl }: { bookId: string; deletedImageUrl: string },
  next: NextFunction
) => {
  try {
    const targetBook = await Book.findById(bookId);
    if (!targetBook) throw new HttpException(404, "Book not found.");

    const findIdx = targetBook.images?.findIndex((i) => i === deletedImageUrl);
    if (findIdx === -1) throw new HttpException(404, "Image not found.");

    if (findIdx === 0 || findIdx) {
      try {
        targetBook.images?.splice(findIdx, 1);
        await targetBook.save();
      } catch (err) {
        next(err);
      }
    }
  } catch (err) {
    next(err);
  }
};
