import { NextFunction } from "express";
import User from "../../../model/user";
import { HttpException } from "../../../../middleware/error/utils";
import PointLog, { IPointLog } from "../models/point-log";
import { FilterQuery } from "mongoose";

type FilterType = "pointId" | "amount" | "desc";

type QueryField = {
  filter: FilterType | undefined;
  keyword: string | number | undefined;
  userId: string;
  pageNum?: number;
  sort: "최신순" | "오래된순";
};

const PAGE_SIZE = 8;

export const handleGetUserPointLog = async (
  { filter, keyword, userId, pageNum = 1, sort = "최신순" }: QueryField,
  next: NextFunction
) => {
  try {
    const isExist = await User.findOne({ id: userId });
    if (!isExist) throw new HttpException(404, "User not found.");

    let query = buildQuery(userId, filter, keyword);

    const totalPoints = await PointLog.countDocuments(query);
    const totalPages = Math.ceil(totalPoints / PAGE_SIZE);

    let pointsLogs = await PointLog.find(query)
      .skip(PAGE_SIZE * (pageNum - 1))
      .limit(PAGE_SIZE)
      .sort(sort === "최신순" ? { createdAt: -1 } : { createdAt: 1 });

    const response = {
      pointsLogs,
      pagination: {
        currentPage: pageNum,
        totalPages,
        totalPoints,
      },
    };

    return response;
  } catch (err) {
    next(err);
  }
};

function buildQuery(
  userId: string,
  filter?: FilterType,
  keyword?: string | number
): FilterQuery<IPointLog> {
  let query: FilterQuery<IPointLog> = { userId };
  if (filter && (keyword !== undefined || keyword !== "undefined")) {
    query[filter] =
      typeof keyword === "string"
        ? { $regex: new RegExp(keyword, "i") }
        : keyword;
  }
  return query;
}
