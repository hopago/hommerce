import { NextFunction } from "express";
import User from "../../../model/user";
import { HttpException } from "../../../../middleware/error/utils";
import PointLog from "../models/point-log";

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
  let query = { userId };
  const isExist = await User.findOne({
    id: userId,
  });
  if (!isExist) throw new HttpException(404, "User not found.");

  if (filter && keyword) {
    if (typeof keyword === "string") {
      query = {
        ...query,
        [filter]: { $regex: new RegExp(keyword, "i") },
      };
    } else {
      query = {
        ...query,
        [filter]: keyword,
      };
    }
  }

  try {
    const totalPoints = await PointLog.countDocuments(query);
    const totalPages = Math.ceil(totalPoints / PAGE_SIZE);

    let pointsLogs;

    if (pageNum) {
      pointsLogs = await PointLog.find(query)
        .skip(PAGE_SIZE * (pageNum - 1))
        .limit(PAGE_SIZE)
        .sort(sort === "최신순" ? { createdAt: -1 } : { createdAt: 1 });
    } else {
      pointsLogs = await PointLog.find(query).sort(
        sort === "최신순" ? { createdAt: -1 } : { createdAt: 1 }
      );
    }

    const response = {
      pointsLogs,
      ...(pageNum && {
        pagination: {
          currentPage: pageNum,
          totalPages,
          totalPoints,
        },
      }),
    };

    return response;
  } catch (err) {
    next(err);
  }
};
