import { NextFunction, Request } from "express";
import { validateFields } from "../../../../utils/validateFields";
import PointLog from "../models/point-log";
import { HttpException } from "../../../../middleware/error/utils";
import Point from "../../models/point";

const field = ["desc", "amount"];

export const handleUpdatePointLog = async (
  req: Request,
  next: NextFunction
) => {
  validateFields(field, req);

  const { userId, pointId } = req.params;
  const { amount, desc } = req.body;

  try {
    const updatedPointLog = await PointLog.findOneAndUpdate(
      { userId, pointId },
      { $set: { desc, amount } },
      { new: true }
    );
    if (!updatedPointLog) {
      throw new HttpException(404, "Point Log not found.");
    }

    try {
      const pointDifference = updatedPointLog.amount - amount;

      const updatedPoint = await Point.findByIdAndUpdate(
        pointId,
        { $inc: { point: -pointDifference } },
        { new: true }
      );
      if (!updatedPoint) {
        throw new HttpException(404, "Point not found.");
      }

      return updatedPointLog;
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};
