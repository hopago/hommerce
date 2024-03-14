import { NextFunction, Request } from "express";
import Point, { IPoint } from "../models/point";
import { HttpException } from "../../../middleware/error/utils";

export const handleGetPoint = async (req: Request, next: NextFunction) => {
  try {
    const { point } = (await Point.findOne({
      userId: req.params.userId,
    })) as IPoint;
    if (!point) throw new HttpException(404, "Point not found.");

    return point ?? 0;
  } catch (err) {
    next(err);
  }
};
