import { NextFunction } from "express";
import Book from "../models/book";

type FilterType = "통합검색" | "제목" | "저자";

type QueryField = {
  filter?: FilterType;
  keyword: string;
  pageNum?: number;
  sort: "최신순" | "오래된순";
};

const PAGE_SIZE = 8;

const getSortCondition: any = (sort: "최신순" | "오래된순") => {
  return sort === "최신순" ? { createdAt: -1 } : { createdAt: 1 };
};

export const handleGetBooksBySearchTerm = async (
  { filter = "통합검색", keyword, pageNum = 1, sort = "최신순" }: QueryField,
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
        .sort(getSortCondition(sort));
    } else {
      books = await Book.find({
        $or: [
          { title: { $regex: new RegExp(keyword, "i") } },
          { author: { $regex: new RegExp(keyword, "i") } },
          { publisher: { $regex: new RegExp(keyword, "i") } },
        ],
      }).sort(getSortCondition(sort)).limit(PAGE_SIZE);
    }

    const response = {
      books,
      ...(pageNum && {
        pagination: {
          currentPage: pageNum,
          totalBooks,
          totalPages,
        },
      }),
    };

    return response;
  } catch (err) {
    next(err);
  }
};
