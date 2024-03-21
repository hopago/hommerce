import { NextFunction } from "express";
import Favor from "../models/favor";
import { HttpException } from "../../../middleware/error/utils";

type GetFavorLengthProps = {
  bookId: string;
};

export const handleGetFavorLength = async (
  { bookId }: GetFavorLengthProps,
  next: NextFunction
) => {
  try {
    const foundFavor = await Favor.find({
      books: {
        bookId,
      },
    });
    if (!foundFavor) throw new HttpException(404, "Favor not found.");

    return foundFavor.length;
  } catch (err) {
    next(err);
  }
};
