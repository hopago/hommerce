import { NextFunction, Request } from "express";
import Point from "../models/point";

export const handlePostPoint = async (req: Request, next: NextFunction) => {
  const newPoint = new Point({
    userId: req.params.userId,
  });

  try {
    const savedPoint = await newPoint.save();

    return savedPoint;
  } catch (err) {
    next(err);
  }
};
