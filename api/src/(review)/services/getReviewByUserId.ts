import { NextFunction } from "express";
import Review, { IReview } from "../models/review";
import User from "../../(user)/model/user";
import { HttpException } from "../../middleware/error/utils";
import { FilterQuery } from "mongoose";

type FilterType = "_id" | "bookTitle" | "desc";

type HandleGetReviewByUserIdParams = {
  userId: string;
  filter: FilterType | undefined;
  keyword: string | undefined;
  pageNum: number | undefined;
  sort: "최신순" | "오래된순";
};

const PAGE_SIZE = 8;

export const handleGetReviewByUserId = async (
  {
    userId,
    filter,
    keyword,
    pageNum = 1,
    sort = "최신순",
  }: HandleGetReviewByUserIdParams,
  next: NextFunction
) => {
  let query: FilterQuery<IReview> = { userId };
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

    let reviews;

    if (pageNum) {
      reviews = await Review.find(query)
        .skip(PAGE_SIZE * (pageNum - 1))
        .limit(PAGE_SIZE)
        .sort(sort === "최신순" ? { createdAt: -1 } : { createdAt: 1 });
    } else {
      reviews = await Review.find(query).sort(
        sort === "최신순" ? { createdAt: -1 } : { createdAt: 1 }
      );
    }

    const response = {
      reviews,
      ...(pageNum && {
        pagination: {
          currentPage: pageNum,
          totalPages,
          totalReviews,
        },
      }),
    };

    return response;
  } catch (err) {
    next(err);
  }
};
