import { NextFunction, Request } from "express";
import { isFieldsFullFilled } from "../../../utils/isFieldsFullFilled";
import Cart from "../models/cart";
import { HttpException } from "../../../middleware/error/utils";

export const handlePostCartItem = async (req: Request, next: NextFunction) => {
  const fields = [
    "bookId",
    "title",
    "author",
    "img",
    "amount",
    "price",
    "unit",
  ];

  isFieldsFullFilled(fields, req);

  const { userId } = req.params;
  if (!userId) throw new HttpException(400, "User Id required.");

  const newCartItem = new Cart({
    userId,
    books: [...req.body],
  });

  try {
    const savedCartItem = await newCartItem.save();

    return savedCartItem;
  } catch (err) {
    next(err);
  }
};
