import { NextFunction } from "express";
import { HttpException } from "../../../../middleware/error/utils";
import PointLog from "../models/point-log";

export type TPoint = {
  userId: string;
  desc: string;
  amount: string;
  pointId: string;
};

export const postPointLog = async (
  { userId, desc, amount, pointId }: TPoint,
  next: NextFunction
) => {
  if (!userId || !desc || !amount || !pointId)
    throw new HttpException(400, "User Id, desc, amount, point id required.");

  const newPointLog = new PointLog({
    userId,
    desc,
    amount,
    pointId,
  });

  try {
    await newPointLog.save();
  } catch (err) {
    next(err);
  }
};
