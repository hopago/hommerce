import { NextFunction } from "express";
import { HttpException } from "../../../../middleware/error/utils";
import PointLog from "../models/point-log";

export const deletePointLog = async (userId: string, next: NextFunction) => {
  if (!userId) throw new HttpException(400, "User Id required.");

  try {
    await PointLog.deleteMany({
      userId,
    });
  } catch (err) {
    next(err);
  }
};
