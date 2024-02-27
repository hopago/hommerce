import { NextFunction, Request } from "express";
import BookDetails from "../models/detail";
import { HttpException } from "../../../middleware/error/utils";

export const handleDeleteBookDetails = async (
  req: Request,
  next: NextFunction
) => {
  const { bookId } = req.body;
  if (!bookId) throw new HttpException(400, "Book Id required.");

  try {
    await BookDetails.findOneAndDelete({
      bookId,
    });
  } catch (err) {
    next(err);
  }
};
