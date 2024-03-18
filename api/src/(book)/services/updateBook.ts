import { NextFunction, Request } from "express";
import Book from "../models/book";
import { validateFields } from "../../utils/validateFields";
import { UpdateQuery } from "mongoose";
import { IUser } from "../../(user)/model/user";
import { HttpException } from "../../middleware/error/utils";

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

  const { images, sellType } = req.body as {
    images: string[] | undefined;
    sellType: SellWay[] | undefined;
  };

  try {
    if (!bookId) throw new HttpException(400, "Book Id required.");

    if (images || sellType) {
      const updateQuery: UpdateQuery<IUser> = {};

      if (images) {
        updateQuery["$push"] = { images: { $each: images } };
      }

      if (sellType) {
        updateQuery["$push"] = {
          ...updateQuery["$push"],
          sellType: { $each: sellType },
        };
      }

      const updatedBook = await Book.findByIdAndUpdate(bookId, updateQuery, {
        new: true,
      });
      if (!updatedBook) throw new HttpException(404, "Book not found.");

      return updatedBook;
    } else {
      const updatedBook = await Book.findByIdAndUpdate(
        bookId,
        {
          ...req.body,
        },
        { new: true }
      );
      if (!updatedBook) throw new HttpException(404, "Book not found.");

      return updatedBook;
    }
  } catch (err) {
    next(err);
  }
};
