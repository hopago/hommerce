import { NextFunction, Request } from "express";
import { validateFields } from "../../utils/validateFields";
import { HttpException } from "../../middleware/error/utils";
import Author from "../models/author";

export const handleUpdateAuthor = async (req: Request, next: NextFunction) => {
  const validFields = ["name", "job", "intro", "books", "representBook", "img"];

  validateFields(validFields, req);

  const { authorId } = req.params;
  if (!authorId) throw new HttpException(400, "Author id required.");

  try {
    const updatedAuthor = await Author.findByIdAndUpdate(
      authorId,
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    return updatedAuthor;
  } catch (err) {
    next(err);
  }
};
