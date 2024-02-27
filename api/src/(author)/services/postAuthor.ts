import { NextFunction, Request } from "express";
import { isFieldsFullFilled } from "../../utils/isFieldsFullFilled";
import { validateBooks } from "../types/isTBookShortcut";
import { HttpException } from "../../middleware/error/utils";
import Author from "../models/author";

export const handlePostAuthor = async (req: Request, next: NextFunction) => {
  const requireFields = [
    "name",
    "job",
    "intro",
    "books",
    "representBook",
    "img",
  ];

  isFieldsFullFilled(requireFields, req);

  const { books } = req.body;

  if (!validateBooks(books)) {
    throw new HttpException(400, "Invalid books data.");
  }

  try {
    const newAuthor = new Author({
      ...req.body,
    });
    const savedAuthor = await newAuthor.save();

    return savedAuthor;
  } catch (err) {
    next(err);
  }
};
