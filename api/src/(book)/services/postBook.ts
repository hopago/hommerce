import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import Book from "../models/book";

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

  for (const field of requiredFields) {
    if (!req.body[field]) {
      throw new HttpException(400, `Field ${field} not fulfilled.`);
    }
  }

  const newBook = new Book({
    ...req.body,
  });
  const savedBook = await newBook.save();
  
  return savedBook;
};
