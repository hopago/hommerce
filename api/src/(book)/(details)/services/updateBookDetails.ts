import { NextFunction, Request } from "express";
import { validateFields } from "../../../utils/validateFields";
import BookDetails from "../models/detail";
import { HttpException } from "../../../middleware/error/utils";

export const handleUpdateBookDetails = async (
  req: Request,
  next: NextFunction
) => {
  const fields = [
    "awards",
    "intro",
    "contentsList",
    "bookInside",
    "bookPublisherReview",
  ];

  validateFields(fields, req);

  const { bookId } = req.params;
  if (!bookId) throw new HttpException(400, "Book Id required.");

  try {
    const updatedDetails = await BookDetails.findOneAndUpdate(
      {
        bookId,
      },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    return updatedDetails;
  } catch (err) {
    next(err);
  }
};
