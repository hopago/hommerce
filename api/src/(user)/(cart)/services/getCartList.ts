import { NextFunction, Request } from "express";
import Cart from "../models/cart";
import { HttpException } from "../../../middleware/error/utils";

export const handleGetCartList = async (req: Request, next: NextFunction) => {
  const { userId } = req.params;
  if (!userId) throw new HttpException(400, "User Id required.");

  try {
    const cartList = await Cart.find({
      userId,
    }).sort({ createdAt: -1 });

    return cartList;
  } catch (err) {
    next(err);
  }
};
