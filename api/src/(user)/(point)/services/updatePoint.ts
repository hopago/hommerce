import { NextFunction, Request } from "express";
import Point, { IPoint } from "../models/point";
import { HttpException } from "../../../middleware/error/utils";
import PointLog from "../(log)/models/point-log";
import { postPointLog } from "../(log)/services/postPointLog";

export const handleUpdatePoint = async (req: Request, next: NextFunction) => {
  const { point } = req.body;
  const { desc, amount } = point;
  if (!point || !desc || !amount)
    throw new HttpException(400, "Desc and amount required.");

  try {
    const foundPoint = await Point.findOne({
      userId: req.params.userId,
    });
    if (!foundPoint) throw new HttpException(404, "Point Docs not found.");

    const foundPointLog = await PointLog.findOne({
      userId: req.params.userId,
    });
    if (!foundPointLog) throw new HttpException(404, "Point Log not found.");

    try {
      await postPointLog({ userId: req.params.userId, desc, amount }, next);
    } catch (err) {
      next(err);
    }

    try {
      const savedPoint = (await foundPoint?.updateOne(
        {
          $inc: { point: point.amount },
        },
        {
          new: true,
        }
      )) as IPoint;

      if (savedPoint.point < 0)
        throw new HttpException(500, "Something went wrong in point.");

      return savedPoint.point;
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};
