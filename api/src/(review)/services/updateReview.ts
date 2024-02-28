import { NextFunction, Request } from "express";
import { validateFields } from "../../utils/validateFields";
import Review from "../models/review";
import { handleUpdateTotal } from "../(total)/services/updateTotal";

export const handleUpdateReview = async (req: Request, next: NextFunction) => {
  const fields = ["rating", "keyword", "desc"];

  validateFields(fields, req);

  try {
    const updatedReview = await Review.findOneAndUpdate(
      {
        userId: req.params.userId,
        bookId: req.body.bookId,
      },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    try {
      await handleUpdateTotal(req, next);
    } catch (err) {
      next(err);
    }

    return updatedReview;
  } catch (err) {
    next(err);
  }
};
