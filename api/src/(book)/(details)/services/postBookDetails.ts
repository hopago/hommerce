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

  const { bookId } = req.params;
  if (!bookId) throw new HttpException(400, "Book Id required.");

  try {
    const newDetails = new BookDetails({
      bookId,
      ...req.body,
      // TODO: awards: string[] 처리
    });

    const savedDetails = await newDetails.save();

    return savedDetails;
  } catch (err) {
    next(err);
  }
};
