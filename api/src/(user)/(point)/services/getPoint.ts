import { NextFunction, Request } from "express";
import Point, { IPoint } from "../models/point";

export const handleGetPoint = async (req: Request, next: NextFunction) => {
  try {
    const { point } = (await Point.findOne({
      userId: req.params.userId,
    })) as IPoint;

    return point;
  } catch (err) {
    next(err);
  }
};
