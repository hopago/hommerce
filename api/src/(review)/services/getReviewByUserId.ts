import { NextFunction } from "express";
import Review from "../models/review";

type FilterType = "_id" | "bookTitle" | "desc";

type HandleGetReviewByUserIdParams = {
  userId: string;
  filter: FilterType | undefined;
  searchTerm: string | undefined;
  pageNum: number | undefined;
};

const PAGE_SIZE = 8;

export const handleGetReviewByUserId = async (
  { userId, filter, searchTerm, pageNum }: HandleGetReviewByUserIdParams,
  next: NextFunction
) => {
  let query = { userId };

  if (filter && searchTerm) {
    query = {
      ...query,
      [filter]: { $regex: new RegExp(searchTerm, "i") }, // 대소문자를 구분하지 않는 검색
    };
  }

  try {
    const totalReviews = await Review.countDocuments(query);
    const totalPages = Math.ceil(totalReviews / PAGE_SIZE);

    const reviews = pageNum
      ? await Review.find(query)
          .skip(PAGE_SIZE * (pageNum - 1))
          .limit(PAGE_SIZE)
      : await Review.find(query);

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
