import { NextFunction, Request } from "express";
import BookDetails from "../models/detail";
import { isFieldsFullFilled } from "../../../utils/isFieldsFullFilled";
import { HttpException } from "../../../middleware/error/utils";

export const handlePostBookDetails = async (
  req: Request,
  next: NextFunction
) => {
  const requiredFields = [
    "awards",
    "intro",
    "contentsList",
    "bookInside",
    "bookPublisherReview",
  ];

  isFieldsFullFilled(requiredFields, req);

  try {
    const { bookId } = req.params;
    if (!bookId) throw new HttpException(400, "Book Id required.");

    try {
      const isDuplicated = await BookDetails.findOne({
        bookId,
      });
      if (isDuplicated)
        throw new HttpException(409, "Book Details already exist.");
    } catch (err) {
      next(err);
    }

    try {
      const newDetails = new BookDetails({
        bookId,
        ...req.body,
      });

      const savedDetails = await newDetails.save();

      return savedDetails;
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};
