import { NextFunction, Request } from "express";
import { isFieldsFullFilled } from "../../../utils/isFieldsFullFilled";
import Favor from "../models/favor";

export const handlePostFavorList = async (req: Request, next: NextFunction) => {
  const requiredFields = ["title", "author", "img", "bookId"];

  isFieldsFullFilled(requiredFields, req);

  const newFavorList = new Favor({
    userId: req.params.userId,
    books: [
      {
        bookId: req.body.bookId,
        title: req.body.title,
        author: req.body.author,
        img: req.body.img,
      },
    ],
  });

  try {
    const savedList = await newFavorList.save();

    return savedList;
  } catch (err) {
    next(err);
  }
};
