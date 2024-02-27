import { NextFunction, Request } from "express";
import Cart from "../models/cart";
import { HttpException } from "../../../middleware/error/utils";
import { validateFields } from "../../../utils/validateFields";
import { isFieldsFullFilled } from "../../../utils/isFieldsFullFilled";

export const handleUpdateCartList = async (
  req: Request,
  next: NextFunction
) => {
  const fields = [
    "bookId",
    "title",
    "author",
    "img",
    "amount",
    "price",
    "unit",
  ];
  const requiredFields = ["bookId", "amount"];

  validateFields(fields, req);
  isFieldsFullFilled(requiredFields, req);

  const { userId } = req.params;
  if (!userId) throw new HttpException(400, "Book id required.");

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) throw new HttpException(404, "Cart not found.");

    const book = cart.books.find((book) => book.bookId === req.body.bookId);
    if (!book) throw new HttpException(404, "Book not found in the cart.");

    book.amount = req.body.amount;
    await cart.save();

    return cart;
  } catch (err) {
    next(err);
  }
};
