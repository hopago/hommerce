import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import Author, { IAuthor } from "../models/author";

export const handleDeleteAuthor = async (req: Request, next: NextFunction) => {
  const { authorId } = req.params;
  if (!authorId) throw new HttpException(400, "Author id required.");

  try {
    const deletedAuthor = await Author.findByIdAndDelete(authorId) as IAuthor;
    if (!deletedAuthor) throw new HttpException(404, "Author not found.");

    return deletedAuthor._id;
  } catch (err) {
    next(err);
  }
};
