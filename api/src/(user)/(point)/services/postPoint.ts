import { NextFunction } from "express";
import Point from "../models/point";

export const handlePostPoint = async (
  { userId }: { userId: string },
  next: NextFunction
) => {
  const newPoint = new Point({
    userId,
  });

  try {
    const savedPoint = await newPoint.save();

    return savedPoint;
  } catch (err) {
    next(err);
  }
};
