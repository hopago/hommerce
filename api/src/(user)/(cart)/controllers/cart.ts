import { NextFunction, Request, Response } from "express";
import { handleGetCartList } from "../services/getCartList";
import { handlePostCartItem } from "../services/postCartItem";
import { handleUpdateCartList } from "../services/updateCartList";
import { handleDeleteCartItem } from "../services/deleteCartItem";

export const getCartList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cartList = await handleGetCartList(req, next);

    return res.status(200).json(cartList);
  } catch (err) {
    next(err);
  }
};

export const postCartItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCartItem = await handlePostCartItem(req, next);

    return res.status(201).json(newCartItem);
  } catch (err) {
    next(err);
  }
};

export const updateCartList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedCartList = await handleUpdateCartList(req, next);

    return res.status(201).json(updatedCartList);
  } catch (err) {
    next(err);
  }
};

export const deleteCartItem = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCart = await handleDeleteCartItem(req, next);

    return res.status(201).json(newCart);
  } catch (err) {
    next(err);
  }
};
