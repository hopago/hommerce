import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import Author from "../models/author";

export const handleGetAuthor = async (req: Request, next: NextFunction) => {
  const { authorId } = req.params;
  if (!authorId) throw new HttpException(400, "Author id required.");

  try {
    const author = await Author.findById(authorId);

    return author;
  } catch (err) {
    next(err);
  }
};
