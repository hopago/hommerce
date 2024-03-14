import { NextFunction, Request, Response } from "express";
import { handleGetPopularCategories } from "../services/getPopularCategories";

export const getPopularCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await handleGetPopularCategories(next);

    if (categories) {
      return res.status(200).json(categories);
    }
  } catch (err) {
    next(err);
  }
};
