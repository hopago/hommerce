import { NextFunction } from "express";
import Book, { IBook } from "../models/book";
import { FilterQuery } from "mongoose";
import { HttpException } from "../../middleware/error/utils";

type FilterType = "통합검색" | "제목" | "저자";

type SearchField = FilterType | "title" | "author";

type QueryField = {
  filter?: FilterType;
  keyword?: string;
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
  let query: FilterQuery<IBook> = {};

  if (keyword && keyword.trim() !== "" && keyword !== "undefined") {
    if (filter === "통합검색") {
      query = {
        $or: [
          { title: { $regex: new RegExp(keyword, "i") } },
          { author: { $regex: new RegExp(keyword, "i") } },
          { publisher: { $regex: new RegExp(keyword, "i") } },
        ],
      };
    } else if (filter === "제목") {
      query = { title: { $regex: new RegExp(keyword, "i") } };
    } else if (filter === "저자") {
      query = { author: { $regex: new RegExp(keyword, "i") } };
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
      books = await Book.find(query)
        .limit(PAGE_SIZE)
        .sort(getSortCondition(sort));
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

    if (!response.books.length) {
      next(new HttpException(400, "Book not found."));
    }

    return response;
  } catch (err) {
    next(err);
  }
};
