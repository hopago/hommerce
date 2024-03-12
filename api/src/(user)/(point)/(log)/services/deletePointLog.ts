import { NextFunction } from "express";
import { HttpException } from "../../../../middleware/error/utils";
import PointLog from "../models/point-log";

export const handleDeletePointLog = async (
  userId: string,
  next: NextFunction,
  pointId?: string | undefined
) => {
  if (!userId) throw new HttpException(400, "User Id required.");

  try {
    pointId === "undefined" || !pointId
      ? await PointLog.deleteMany({
          userId,
        })
      : await PointLog.deleteOne({
          userId,
          _id: pointId,
        });
  } catch (err) {
    next(err);
  }
};
