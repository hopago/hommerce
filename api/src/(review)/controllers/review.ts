import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../middleware/error/utils";
import { handleGetReviews } from "../services/getReviews";
import { handlePostReview } from "../services/postReview";
import { handleUpdateReview } from "../services/updateReview";
import { handleDeleteReview } from "../services/deleteReview";

export const getReviews = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { bookId } = req.params;
  const { pageNum }: { pageNum: number } = req.body;

  if (!bookId) throw new HttpException(400, "Book Id required.");
  if (!pageNum) throw new HttpException(400, "Page number required.");

  try {
    const { reviews, hasNextPage } = await handleGetReviews(bookId, pageNum);

    return res.status(200).json({ reviews, hasNextPage });
  } catch (err) {
    next(err);
  }
};

export const postReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  if (!userId) throw new HttpException(400, "User Id required.");

  try {
    const newReview = await handlePostReview(req, next);

    return res.status(201).json(newReview);
  } catch (err) {
    next(err);
  }
};

export const updateReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  const { bookId } = req.body;

  if (!userId) throw new HttpException(400, "User Id required.");
  if (!bookId) throw new HttpException(400, "Book Id required.");

  try {
    const updatedReview = await handleUpdateReview(req, next);

    return res.status(201).json(updatedReview);
  } catch (err) {
    next(err);
  }
};

export const deleteReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  const { bookId }: { bookId: string } = req.body;

  if (!userId) throw new HttpException(400, "User Id required.");
  if (!bookId) throw new HttpException(400, "Book Id required.");

  try {
    const _id = await handleDeleteReview({ userId, bookId }, next);

    return res.status(201).json(_id);
  } catch (err) {
    next(err);
  }
};
