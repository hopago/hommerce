import { NextFunction } from "express";
import { HttpException } from "../../middleware/error/utils";
import Book from "../models/book";

type FilterType = "통합검색" | "제목" | "저자";

type QueryField = {
  filter: FilterType | undefined;
  keyword: string | undefined;
  pageNum?: number;
  sort: "최신순" | "오래된순";
};

const PAGE_SIZE = 8;

export const handleGetBooksBySearchTerm = async (
  { filter, keyword, pageNum, sort = "최신순" }: QueryField,
  next: NextFunction
) => {
  let query: {} = {};

  if (filter && keyword) {
    if (typeof keyword === "string") {
      query = {
        [filter]: { $regex: new RegExp(keyword, "i") },
      };
    } else {
      query = {
        [filter]: keyword,
      };
    }
  }

  try {
    const totalBooks = await Book.countDocuments(query);
    const totalPages = Math.ceil(totalBooks / PAGE_SIZE);

    let books;

    if (pageNum) {
      books = await Book.find(query)
        .skip(PAGE_SIZE * (pageNum - 1))
        .limit(PAGE_SIZE)
        .sort(sort === "최신순" ? { createdAt: -1 } : { createdAt: 1 });
    } else {
      books = await Book.find(query).sort(
        sort === "최신순" ? { createdAt: -1 } : { createdAt: 1 }
      );
    }

    const response = {
      books,
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
