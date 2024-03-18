import { NextFunction, Request, Response } from "express";
import BookDetails from "../models/detail";
import { HttpException } from "../../../middleware/error/utils";

export const handleGetBookDetails = async (
  req: Request,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;
    if (!bookId) throw new HttpException(400, "Book Id required.");

    const details = await BookDetails.findOne({
      bookId,
    });
    if (!details) {
      return {
        code: 404,
        message: "Details not found or Details not created.",
      };
    } else {
      return details;
    }
  } catch (err) {
    next(err);
  }
};
