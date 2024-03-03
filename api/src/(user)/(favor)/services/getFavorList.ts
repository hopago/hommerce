import { NextFunction } from "express";
import Favor, { IFavor } from "../models/favor";
import { HttpException } from "../../../middleware/error/utils";

export const handleGetFavorList = async (
  { userId }: { userId: string },
  next: NextFunction
) => {
  try {
    const favorList = (await Favor.findOne({
      userId,
    }).sort({ createdAt: -1 }));
    if (!favorList) throw new HttpException(404, "Favor list not found.");

    return favorList.books;
  } catch (err) {
    next(err);
  }
};
