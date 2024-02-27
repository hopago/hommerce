import { NextFunction, Request } from "express";
import BookDetails from "../models/detail";
import { HttpException } from "../../../middleware/error/utils";

export const handleGetBookDetails = async (
  req: Request,
  next: NextFunction
) => {
  const { bookId } = req.params;
  if (!bookId) throw new HttpException(400, "Book Id required.");

  try {
    const details = await BookDetails.findOne({
      bookId,
    });

    return details;
  } catch (err) {
    next(err);
  }
};
