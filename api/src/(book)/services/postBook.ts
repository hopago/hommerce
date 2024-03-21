import { NextFunction, Request } from "express";
import Book, { IBook } from "../models/book";
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

  const {
    parentCategory,
  }: { parentCategory: BookParentCategory | BookParentCategoryList } = req.body;

  let newParentCategory: BookParentCategory | BookParentCategoryList;

  if (typeof parentCategory === "string") {
    newParentCategory = [parentCategory];
  } else {
    newParentCategory = parentCategory;
  }

  const newBook: IBook = new Book<IBook>({
    ...req.body,
    parentCategory: newParentCategory,
  });
  const savedBook = await newBook.save();

  return savedBook;
};
