import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import Book from "../models/book";

export const handleUpdateBook = async (req: Request, next: NextFunction) => {
  const validateFields = [
    "id",
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

  const validFieldsSet = new Set(validateFields);

  for (const field in req.body) {
    if (!validFieldsSet.has(field)) {
      throw new HttpException(400, `Field ${field} is not valid.`);
    }
  }

  const { id } = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
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
