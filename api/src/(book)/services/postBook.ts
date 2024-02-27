import { NextFunction, Request } from "express";
import Book from "../models/book";
import { isFieldsFullFilled } from "../../utils/isFieldsFullFilled";

export const handlePostBook = async (req: Request, next: NextFunction) => {
  const requiredFields = [
    "title",
    "desc",
    "representImg",
    "parentCategory",
    "category",
    "author",
    "price",
    "unit",
    "publisher",
  ];

  isFieldsFullFilled(requiredFields, req);

  const newBook = new Book({
    ...req.body,
  });
  const savedBook = await newBook.save();

  return savedBook;
};
