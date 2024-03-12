import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../../../middleware/error/utils";
import { handleGetUserPointLog } from "../services/getUserPointLog";
import { handleUpdatePointLog } from "../services/updatePointLog";
import { handleDeletePointLog } from "../services/deletePointLog";

type FilterType = "pointId" | "amount" | "desc";

export const getUserPointLog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  // { userId: "undefined" }로 요청이 오는 것을 확인
  if (!userId || userId === "undefined")
    throw new HttpException(400, "User Id required.");

  const filter = req.query.filter as FilterType | undefined;
  const keyword = req.query.keyword as string | number;
  const { pageNum } = req.body;

  try {
    const pointLogs = await handleGetUserPointLog(
      { filter, keyword, userId, pageNum },
      next
    );

    return res.status(200).json(pointLogs);
  } catch (err) {
    next(err);
  }
};

export const updateUserPointLog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  const pointId = req.query.pointLogId;

  if (!userId) throw new HttpException(400, "User Id required.");
  if (!pointId || pointId === "undefined")
    throw new HttpException(400, "Point id required.");

  try {
    const updatedPointLog = await handleUpdatePointLog(req, next);

    return res.status(201).json(updatedPointLog);
  } catch (err) {
    next(err);
  }
};

export const deleteUserPointLog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;
  const pointId = req.query.pointLogId as string | "undefined" | undefined;

  if (!userId) throw new HttpException(400, "User Id required.");

  try {
    const deletedPointLogId = await handleDeletePointLog(userId, next, pointId);

    return res.status(201).json(deletedPointLogId);
  } catch (err) {
    next(err);
  }
};
