import { NextFunction, Request } from "express";
import Point, { IPoint } from "../models/point";
import { HttpException } from "../../../middleware/error/utils";

export const handleUpdatePoint = async (req: Request, next: NextFunction) => {
  const { point } = req.body;
  if (typeof point !== "number")
    throw new HttpException(400, "Invalid point type.");

  try {
    const foundPoint = await Point.findOne({
      userId: req.params.userId,
    });
    if (!foundPoint) throw new HttpException(404, "Point Docs not found.");

    try {
      const savedPoint = (await foundPoint?.updateOne(
        {
          point: foundPoint.point + req.body.point,
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
