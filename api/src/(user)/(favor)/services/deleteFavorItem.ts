import { NextFunction } from "express";
import Favor from "../models/favor";
import { HttpException } from "../../../middleware/error/utils";

export const handleDeleteFavorItem = async (
  {
    bookId,
    userId,
  }: {
    bookId: string;
    userId: string;
  },
  next: NextFunction
) => {
  try {
    const found = await Favor.findOne({ userId });
    if (!found) throw new HttpException(404, "Favor not found.");

    const index = found?.books.findIndex((book) => book.bookId === bookId);
    if (index === -1 || !index) throw new HttpException(404, "Book not found.");

    found?.books.splice(index, 1);

    try {
      await found?.save();

      return found;
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};
