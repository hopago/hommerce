import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../../middleware/error/utils";
import { handleGetPoint } from "../services/getPoint";
import { handlePostPoint } from "../services/postPoint";
import { handleUpdatePoint } from "../services/updatePoint";
import { handleDeletePoint } from "../services/deletePoint";

export const getPoint = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    if (!userId) throw new HttpException(400, "User Id required.");

    const point = await handleGetPoint(req, next);

    return res.status(200).json(point);
  } catch (err) {
    next(err);
  }
};

export const postPoint = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    if (!userId) throw new HttpException(400, "User Id required.");

    const newPoint = await handlePostPoint({ userId }, next);

    return res.status(201).json(newPoint);
  } catch (err) {
    next(err);
  }
};

export const updatePoint = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    if (!userId) throw new HttpException(400, "User Id required.");

    const updatedPoint = await handleUpdatePoint(req, next);

    return res.status(201).json(updatedPoint);
  } catch (err) {
    next(err);
  }
};

export const deletePoint = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    if (!userId) throw new HttpException(400, "User Id required.");

    await handleDeletePoint({ userId }, next);

    return res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
