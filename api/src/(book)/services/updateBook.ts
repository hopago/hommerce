import { NextFunction, Request } from "express";
import Book from "../models/book";
import { validateFields } from "../../utils/validateFields";
import { UpdateQuery } from "mongoose";
import { HttpException } from "../../middleware/error/utils";
import { updateQueryForField } from "../utils/updateQueryForField";

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
    "sellWay",
  ];

  try {
    validateFields(fields, req);
  } catch (err) {
    next(err);
  }

  const { bookId } = req.params;

  const { images, sellWay, parentCategory } = req.body as {
    images: string[] | undefined;
    sellWay: SellWay;
    parentCategory: BookParentCategory;
  };

  if (images || sellWay || parentCategory) {
    try {
      if (!bookId) throw new HttpException(400, "Book Id required.");

      const bookToUpdate = await Book.findById(bookId);
      if (!bookToUpdate) throw new HttpException(404, "Book not found.");

      const updateQuery: UpdateQuery<any> = {};

      if (images && Array.isArray(images) && images.length) {
        updateQuery["$push"] = { images: { $each: images } };
      } else if (images && !Array.isArray(images)) {
        throw new HttpException(400, "Invalid images type.");
      }

      if (sellWay) {
        try {
          updateQueryForField(
            bookToUpdate,
            updateQuery,
            "sellType",
            sellWay,
            2
          );
        } catch (err) {
          next(err);
        }
      }

      if (parentCategory) {
        try {
          updateQueryForField(
            bookToUpdate,
            updateQuery,
            "parentCategory",
            parentCategory,
            2
          );
        } catch (err) {
          next(err);
        }
      }

      const updatedBook = await Book.findByIdAndUpdate(bookId, updateQuery, {
        new: true,
      });
      if (!updatedBook) throw new HttpException(404, "Book not found.");

      return updatedBook;
    } catch (err) {
      next(err);
    }
  } else {
    try {
      const updatedBook = await Book.findByIdAndUpdate(
        bookId,
        {
          ...req.body,
        },
        {
          new: true,
        }
      );
      if (!updatedBook) throw new HttpException(404, "Book not found.");

      return updatedBook;
    } catch (err) {
      next(err);
    }
  }
};
