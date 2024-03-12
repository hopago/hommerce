import { NextFunction } from "express";
import Review from "../models/review";
import User from "../../(user)/model/user";
import { HttpException } from "../../middleware/error/utils";

type FilterType = "_id" | "bookTitle" | "desc";

type HandleGetReviewByUserIdParams = {
  userId: string;
  filter: FilterType | undefined;
  keyword: string | undefined;
  pageNum: number | undefined;
};

const PAGE_SIZE = 8;

export const handleGetReviewByUserId = async (
  { userId, filter, keyword, pageNum }: HandleGetReviewByUserIdParams,
  next: NextFunction
) => {
  let query = { userId };
  const isExist = await User.findOne({
    id: userId,
  });
  if (!isExist) throw new HttpException(404, "User not found.");

  if (filter && keyword) {
    query = {
      ...query,
      [filter]: { $regex: new RegExp(keyword, "i") },
    };
  }

  try {
    const totalReviews = await Review.countDocuments(query);
    const totalPages = Math.ceil(totalReviews / PAGE_SIZE);

    const reviews = pageNum
      ? await Review.find(query)
          .skip(PAGE_SIZE * (pageNum - 1))
          .limit(PAGE_SIZE)
          .sort({ createdAt: -1 })
      : await Review.find(query).sort({ createdAt: -1 });

    const response = {
      reviews,
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