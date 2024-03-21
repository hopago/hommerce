import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../../middleware/error/utils";
import { getSubscription } from "../services/getSubscription";

interface IsSubscribedParams {
  bookId?: string;
  userId?: string;
}

export const isSubscribed = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId, userId }: IsSubscribedParams = req.params;

    if (!bookId || !userId) throw new HttpException(400, "Params required.");

    const checkedValue = await getSubscription({ bookId, userId }, next);

    if (checkedValue !== undefined && typeof checkedValue === "boolean") {
      return res.status(200).json(checkedValue);
    }
  } catch (err) {
    next(err);
  }
};
