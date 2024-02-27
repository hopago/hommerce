import { NextFunction, Request } from "express";
import Book from "../models/book";
import { validateFields } from "../../utils/validateFields";

export const handleUpdateBook = async (req: Request, next: NextFunction) => {
  const fields = [
    "title",
    "desc",
    "representImg",
    "parentCategory",
    "category",
    "author",
    "price",
    "unit",
    "publisher",
    "comment",
    "ebookPrice",
    "discount",
    "images",
    "sellType",
  ];

  validateFields(fields, req);

  const { bookId } = req.params;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      {
        ...req.body,
      },
      { new: true }
    );

    return updatedBook;
  } catch (err) {
    next(err);
  }
};
