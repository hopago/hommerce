import { NextFunction, Request } from "express";
import { HttpException } from "../../../middleware/error/utils";
import Cart from "../models/cart";

export const handleDeleteCartItem = async (
  req: Request,
  next: NextFunction
) => {
  const { userId } = req.params;
  const { bookId } = req.query;

  if (!userId) throw new HttpException(400, "User Id required.");
  if (!bookId) throw new HttpException(400, "Book Id required.");

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) throw new HttpException(404, "Cart not found.");

    const bookIndex = cart.books.findIndex((book) => book.bookId === bookId);

    if (bookIndex === -1)
      throw new HttpException(404, "Book not found in the cart.");

    cart.books.splice(bookIndex, 1);

    await cart.save();

    return cart;
  } catch (err) {
    next(err);
  }
};
