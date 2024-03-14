import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../middleware/error/utils";
import { handleGetReviews } from "../services/getReviews";
import { handlePostReview } from "../services/postReview";
import { handleUpdateReview } from "../services/updateReview";
import { handleDeleteReview } from "../services/deleteReview";
import { handleDeleteReviewById } from "../services/deleteReviewById";
import { handleGetReviewByUserId } from "../services/getReviewByUserId";

type FilterType = "_id" | "bookTitle" | "desc";

export const deleteReviewById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const reviewId = req.query.reviewId as string | undefined;
  if (!reviewId) throw new HttpException(400, "Review Id required.");

  try {
    await handleDeleteReviewById(reviewId, next);

    return res.status(201).json(reviewId);
  } catch (err) {
    next(err);
  }
};

export const getReviews = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;
    const { pageNum }: { pageNum: number } = req.body;

    if (!bookId) throw new HttpException(400, "Book Id required.");
    if (!pageNum) throw new HttpException(400, "Page number required.");

    const { reviews, hasNextPage, totalReviews } = await handleGetReviews(
      bookId,
      pageNum
    );

    return res.status(200).json({ reviews, hasNextPage, totalReviews });
  } catch (err) {
    next(err);
  }
};

export const getReviewByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const sort = decodeURIComponent(req.query.sort as string) as
      | "최신순"
      | "오래된순";
    const filter = req.query.filter as FilterType | undefined;
    const keyword = req.query.keyword as string | undefined;

    if (!userId || userId === "undefined")
      throw new HttpException(400, "User Id required.");
    if (filter && keyword?.trim() === "")
      throw new HttpException(400, "Search term required.");

    const { pageNum }: { pageNum: number | undefined } = req.body;

    const reviews = await handleGetReviewByUserId(
      { userId, filter, keyword, pageNum, sort },
      next
    );

    return res.status(200).json(reviews);
  } catch (err) {
    next(err);
  }
};

export const postReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    if (!userId) throw new HttpException(400, "User Id required.");

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
  try {
    const { userId } = req.params;
    const { bookId } = req.body;

    if (!userId) throw new HttpException(400, "User Id required.");
    if (!bookId) throw new HttpException(400, "Book Id required.");

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
  try {
    const { userId } = req.params;
    const bookId = req.query.bookId as string | undefined;

    if (!userId) throw new HttpException(400, "User Id required.");
    if (!bookId) throw new HttpException(400, "Book Id required.");

    const _id = await handleDeleteReview({ userId, bookId }, next);

    return res.status(201).json(_id);
  } catch (err) {
    next(err);
  }
};
