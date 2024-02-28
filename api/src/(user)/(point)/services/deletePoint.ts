import { NextFunction, Request } from "express";
import Point from "../models/point";

export const handleDeletePoint = async (req: Request, next: NextFunction) => {
  try {
    await Point.findOneAndDelete({
      userId: req.params.userId,
    });
  } catch (err) {
    next(err);
  }
};
