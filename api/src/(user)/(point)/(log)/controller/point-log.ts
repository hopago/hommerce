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
  const filter = req.query.filter as FilterType | undefined;
  const keyword = req.query.keyword as string | number;
  const sort = decodeURIComponent(req.query.sort as string) as
    | "최신순"
    | "오래된순";
  const pageNum = req.query.pageNum as number | undefined;

  try {
    const { userId } = req.params;
    // { userId: "undefined" }로 요청이 오는 것을 확인
    if (!userId || userId === "undefined")
      throw new HttpException(400, "User Id required.");

    const pointLogs = await handleGetUserPointLog(
      { filter, keyword, userId, pageNum, sort },
      next
    );

    if (pointLogs) {
      return res.status(200).json(pointLogs);
    }
  } catch (err) {
    next(err);
  }
};

export const updateUserPointLog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const pointId = req.query.pointLogId;

    if (!userId) throw new HttpException(400, "User Id required.");
    if (!pointId) throw new HttpException(400, "Point id required.");

    try {
      const updatedPointLog = await handleUpdatePointLog(req, next);

      if (updatedPointLog) {
        return res.status(201).json(updatedPointLog);
      }
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

export const deleteUserPointLog = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const pointId = req.query.pointLogId as string | undefined;

    if (!userId) throw new HttpException(400, "User Id required.");

    await handleDeletePointLog(userId, next, pointId);

    return res.status(201).json(pointId);
  } catch (err) {
    next(err);
  }
};
