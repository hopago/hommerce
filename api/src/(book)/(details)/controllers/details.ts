import { NextFunction, Request, Response } from "express";
import { handleGetBookDetails } from "../services/getBookDetails";
import { handleUpdateBookDetails } from "../services/updateBookDetails";
import { handlePostBookDetails } from "../services/postBookDetails";

export const getBookDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookDetails = await handleGetBookDetails(req, next);

    if (bookDetails) {
      return res.status(200).json(bookDetails);
    }
  } catch (err) {
    next(err);
  }
};

export const postBookDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newBookDetails = await handlePostBookDetails(req, next);

    if (newBookDetails) {
      return res.status(201).json(newBookDetails);
    }
  } catch (err) {
    next(err);
  }
};

export const updateBookDetails = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedBookDetails = await handleUpdateBookDetails(req, next);

    if (updatedBookDetails) {
      return res.status(201).json(updatedBookDetails);
    }
  } catch (err) {
    next(err);
  }
};
