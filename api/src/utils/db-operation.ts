import { NextFunction } from "express";

export const handleDatabaseOperation = async (
  operation: Promise<any>,
  next: NextFunction
) => {
  try {
    return await operation;
  } catch (err) {
    next(err);
  }
};
