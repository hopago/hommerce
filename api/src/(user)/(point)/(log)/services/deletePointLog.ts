import { NextFunction } from "express";
import { HttpException } from "../../../../middleware/error/utils";
import PointLog from "../models/point-log";

export const deletePointLog = async (
  { userId, desc }: { userId: string; desc?: string },
  next: NextFunction
) => {
  if (!userId) throw new HttpException(400, "User Id required.");

  try {
    desc
      ? await PointLog.deleteMany({
          userId,
          desc,
        })
      : await PointLog.deleteMany({
          userId,
        });
  } catch (err) {
    next(err);
  }
};
