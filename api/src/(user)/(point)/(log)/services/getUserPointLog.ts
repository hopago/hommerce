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
};

const PAGE_SIZE = 8;

export const handleGetUserPointLog = async (
  { filter, keyword, userId, pageNum }: QueryField,
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
    const totalReviews = await PointLog.countDocuments(query);
    const totalPages = Math.ceil(totalReviews / PAGE_SIZE);

    const pointsLogs = pageNum
      ? await PointLog.find(query)
          .skip(PAGE_SIZE * (pageNum - 1))
          .limit(PAGE_SIZE)
          .sort({ createdAt: -1 })
      : await PointLog.find(query).sort({ createdAt: -1 });
    const response = {
      pointsLogs,
      ...(pageNum && {
        pagination: {
          currentPage: pageNum,
          totalPages,
        },
      }),
    };

    return response;
  } catch (err) {
    next(err);
  }
};
