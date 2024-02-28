import { NextFunction, Request } from "express";
import ReviewReply from "../models/review-reply";
import { validateFields } from "../../../utils/validateFields";

export const handleUpdateReply = async (req: Request, next: NextFunction) => {
  const validFields = ["userId", "username", "desc"];

  validateFields(validFields, req);

  try {
    const updatedReply = await ReviewReply.findOneAndUpdate(
      {
        userId: req.body.userId,
        reviewId: req.params.reviewId,
      },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    return updatedReply;
  } catch (err) {
    next(err);
  }
};
