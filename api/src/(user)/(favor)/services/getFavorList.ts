import { NextFunction } from "express";
import Favor, { IFavor } from "../models/favor";

export const handleGetFavorList = async (
  { userId }: { userId: string },
  next: NextFunction
) => {
  try {
    const favorList = (await Favor.findOne({
      userId,
    }).sort({ createdAt: -1 })) as IFavor;

    return favorList.books;
  } catch (err) {
    next(err);
  }
};
