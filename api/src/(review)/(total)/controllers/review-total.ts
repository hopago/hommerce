import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../../middleware/error/utils";
import { handleGetTotal } from "../services/getTotal";
import { handlePostTotal } from "../services/postTotal";
import { handleUpdateTotal } from "../services/updateTotal";
import { handleDeleteTotal } from "../services/deleteTotal";
import { isFieldsFullFilled } from "../../../utils/isFieldsFullFilled";
import { handleGetDocsLength } from "../../services/getDocsLength";

export const getTotal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;

    if (!bookId) throw new HttpException(400, "Book Id required.");

    const total = await handleGetTotal({ bookId }, next);

    const reviewsLength = await handleGetDocsLength({ bookId }, next);

    if (total && typeof reviewsLength === "number") {
      return res.status(200).json({ total, reviewsLength });
    }
  } catch (err) {
    next(err);
  }
};

export const postTotal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;

    if (!bookId) throw new HttpException(400, "Book Id required.");

    const newTotal = await handlePostTotal(req, next);

    return res.status(201).json(newTotal);
  } catch (err) {
    next(err);
  }
};

export const updateTotal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;

    if (!bookId) throw new HttpException(400, "Book Id required.");

    const updatedTotal = await handleUpdateTotal(req, next);

    return res.status(201).json(updatedTotal);
  } catch (err) {
    next(err);
  }
};

export const deleteTotal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;
    if (!bookId) throw new HttpException(400, "Book Id required.");

    const { rating, keyword } = req.query as {
      rating: ReviewRatingType;
      keyword: ReviewKeywords;
    };
    isFieldsFullFilled(["rating, keyword"], req);

    try {
      const deletedTotal = await handleDeleteTotal(
        { bookId, rating, keyword },
        next
      );

      return res.status(201).json(deletedTotal);
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};
