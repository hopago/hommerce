import { NextFunction, Request } from "express";
import Favor from "../models/favor";
import { isFieldsFullFilled } from "../../../utils/isFieldsFullFilled";
import { HttpException } from "../../../middleware/error/utils";
import { handlePostFavorList } from "./postFavorList";

export const handleUpdateFavorItem = async (
  req: Request,
  next: NextFunction
) => {
  const validFields = ["title", "img", "author", "bookId"];

  try {
    isFieldsFullFilled(validFields, req);
    const updatedBook = { ...req.body };
    const favorList = await Favor.findOne({ userId: req.params.userId });

    if (!favorList) {
      return await handlePostFavorList(req, next);
    }

    const bookExists = favorList.books.some(
      (book) => book.bookId === updatedBook.bookId
    );

    const updateOperation = bookExists
      ? { $pull: { books: { bookId: req.body.bookId } } }
      : { $push: { books: updatedBook } };

    const updatedFavorList = await Favor.findOneAndUpdate(
      { userId: req.params.userId },
      updateOperation,
      { new: true }
    );

    return updatedFavorList;
  } catch (err) {
    next(err);
  }
};
