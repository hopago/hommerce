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
    const foundPoint = await Point.findOneAndUpdate(
      {
        userId: req.params.userId,
      },
      {
        $inc: { point: point.amount },
      },
      {
        new: true,
      }
    );
    if (!foundPoint) throw new HttpException(404, "Point Docs not found.");

    try {
      const foundPointLog = await PointLog.findOne({
        userId: req.params.userId,
      });
      if (!foundPointLog) throw new HttpException(404, "Point Log not found.");
    } catch (err) {
      next(err);
    }

    try {
      await postPointLog({ userId: req.params.userId, desc, amount, pointId: foundPoint._id }, next);
    } catch (err) {
      next(err);
    }

    return foundPoint.point;
  } catch (err) {
    next(err);
  }
};
