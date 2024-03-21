import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../../middleware/error/utils";
import { handlePostFavorList } from "../services/postFavorList";
import { handleGetFavorList } from "../services/getFavorList";
import { handleUpdateFavorItem } from "../services/updateFavorItem";
import { handleDeleteFavorItem } from "../services/deleteFavorItem";
import { handleGetFavorLength } from "../services/getFavorLength";

export const getFavorList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    if (!userId) throw new HttpException(400, "User Id required.");

    const favorList = await handleGetFavorList({ userId }, next);

    return res.status(200).json(favorList);
  } catch (err) {
    next(err);
  }
};

export const postFavorList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    if (!userId) throw new HttpException(400, "User Id required.");

    const newFavorList = await handlePostFavorList(req, next);

    return res.status(201).json(newFavorList);
  } catch (err) {
    next(err);
  }
};

export const updateFavorItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    if (!userId) throw new HttpException(400, "User Id required.");

    const updatedFavorList = await handleUpdateFavorItem(req, next);

    return res.status(201).json(updatedFavorList);
  } catch (err) {
    next(err);
  }
};

export const deleteFavorItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookId = req.query.bookId as string | undefined;
    const { userId } = req.params;

    if (!bookId) throw new HttpException(400, "Book Id required.");
    if (!userId) throw new HttpException(400, "User Id required.");

    const deletedFavorList = await handleDeleteFavorItem(
      { bookId, userId },
      next
    );

    return res.status(201).json(deletedFavorList);
  } catch (err) {
    next(err);
  }
};

export const getFavorLengthByBookId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { bookId } = req.params;

  try {
    const favorLength = await handleGetFavorLength({ bookId }, next);

    if (typeof favorLength === "number") {
      return res.status(200).json(favorLength);
    }
  } catch (err) {
    next(err);
  }
};
