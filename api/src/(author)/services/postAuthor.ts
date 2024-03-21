import { NextFunction, Request } from "express";
import { isFieldsFullFilled } from "../../utils/isFieldsFullFilled";
import Author from "../models/author";
import Book from "../../(book)/models/book";

export const handlePostAuthor = async (req: Request, next: NextFunction) => {
  const requireFields = ["name", "job", "intro", "representBook", "img"];

  isFieldsFullFilled(requireFields, req);

  try {
    let findAuthorBooks = await Book.find({
      author: req.body.name,
    });
    if (!findAuthorBooks) {
      findAuthorBooks = [];
    }

    const newAuthor = new Author({
      ...req.body,
      books: findAuthorBooks,
    });
    const savedAuthor = await newAuthor.save();

    return savedAuthor;
  } catch (err) {
    next(err);
  }
};
