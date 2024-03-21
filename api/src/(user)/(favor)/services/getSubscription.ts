import { NextFunction } from "express";
import Favor from "../models/favor";
import { HttpException } from "../../../middleware/error/utils";

interface GetSubscriptionProps {
  bookId: string;
  userId: string;
}

export const getSubscription = async (
  { bookId, userId }: GetSubscriptionProps,
  next: NextFunction
) => {
  try {
    const userFavorList = await Favor.findOne({
      userId,
    });
    if (!userFavorList) throw new HttpException(404, "Favor not found.");

    const isExist = userFavorList.books.some((book) => book.bookId === bookId);

    if (isExist) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    next(err);
  }
};
