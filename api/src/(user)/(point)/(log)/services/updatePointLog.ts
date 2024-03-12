import { NextFunction, Request } from "express";
import { validateFields } from "../../../../utils/validateFields";
import PointLog from "../models/point-log";

export const handleUpdatePointLog = async (
  req: Request,
  next: NextFunction
) => {
  const field = ["desc", "amount"];

  validateFields(field, req);

  try {
    const updatedPointLog = await PointLog.findOneAndUpdate(
      {
        userId: req.params.userId,
        pointId: req.query.pointId,
      },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    return updatedPointLog;
  } catch (err) {
    next(err);
  }
};
