import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../../middleware/error/utils";
import { handleGetReplies } from "../services/getReplies";
import { handlePostReply } from "../services/postReply";
import { handleUpdateReply } from "../services/updateReply";
import { handleDeleteReply } from "../services/deleteReply";

export const getReplies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { reviewId } = req.params;

  if (!reviewId) throw new HttpException(400, "Review Id required.");

  try {
    const replies = await handleGetReplies({ reviewId }, next);

    return res.status(200).json(replies);
  } catch (err) {
    next(err);
  }
};

export const postReply = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { reviewId } = req.params;

  if (!reviewId) throw new HttpException(400, "Review Id required.");

  try {
    const newReply = await handlePostReply(req, next);

    return res.status(201).json(newReply);
  } catch (err) {
    next(err);
  }
};

export const updateReply = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { reviewId } = req.params;
  const { userId } = req.body;

  if (!reviewId) throw new HttpException(400, " Review Id required.");
  if (!userId) throw new HttpException(400, "User Id required.");

  try {
    const updatedReply = await handleUpdateReply(req, next);

    return res.status(201).json(updatedReply);
  } catch (err) {
    next(err);
  }
};

export const deleteReply = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { reviewId } = req.params;
  const { userId } = req.body;

  if (!reviewId) throw new HttpException(400, "Review Id required.");
  if (!userId) throw new HttpException(400, "User Id required.");

  try {
    const _id = await handleDeleteReply(req, next);

    return res.status(201).json(_id);
  } catch (err) {
    next(err);
  }
};
