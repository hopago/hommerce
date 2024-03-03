import { NextFunction } from "express";
import Point from "../models/point";

export const handleDeletePoint = async (
  { userId }: { userId: string },
  next: NextFunction
) => {
  try {
    await Point.findOneAndDelete({
      userId,
    });
  } catch (err) {
    next(err);
  }
};
