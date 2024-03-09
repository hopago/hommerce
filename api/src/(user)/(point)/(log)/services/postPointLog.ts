import { NextFunction } from "express";
import { HttpException } from "../../../../middleware/error/utils";
import PointLog from "../models/point-log";

export type TPoint = { userId: string; desc: string; amount: string };

export const postPointLog = async (
  { userId, desc, amount }: TPoint,
  next: NextFunction
) => {
  if (!userId || !desc || !amount)
    throw new HttpException(400, "User Id, desc, amount required.");

  const newPointLog = new PointLog({
    userId,
    desc,
    amount,
  });

  try {
    await newPointLog.save();
  } catch (err) {
    next(err);
  }
};
