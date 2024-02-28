import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../../middleware/error/utils";
import { handleGetTotal } from "../services/getTotal";
import { handlePostTotal } from "../services/postTotal";
import { handleUpdateTotal } from "../services/updateTotal";
import { handleDeleteTotal } from "../services/deleteTotal";
import { isFieldsFullFilled } from "../../../utils/isFieldsFullFilled";

export const getTotal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { bookId } = req.params;

  if (!bookId) throw new HttpException(400, "Book Id required.");

  try {
    const total = await handleGetTotal({ bookId }, next);

    return res.status(200).json(total);
  } catch (err) {
    next(err);
  }
};

export const postTotal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { bookId } = req.params;

  if (!bookId) throw new HttpException(400, "Book Id required.");

  try {
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
  const { bookId } = req.params;

  if (!bookId) throw new HttpException(400, "Book Id required.");

  try {
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
  const { bookId } = req.params;
  if (!bookId) throw new HttpException(400, "Book Id required.");

  const { rating, keyword } = req.body;
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
};
