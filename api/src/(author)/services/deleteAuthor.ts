import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import Author from "../models/author";

export const handleDeleteAuthor = async (req: Request, next: NextFunction) => {
  const { authorId } = req.params;
  if (!authorId) throw new HttpException(400, "Author id required.");

  try {
    await Author.findByIdAndDelete(authorId);
  } catch (err) {
    next(err);
  }
};
