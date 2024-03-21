import { NextFunction, Request, Response } from "express";
import { FilterQuery } from "mongoose";
import Book, { IBook } from "../models/book";
import { HttpException } from "../../middleware/error/utils";

type FilterType = "통합검색" | "제목" | "저자";

export const getDocsLength = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let filter = req.query.filter as FilterType | undefined;
  let keyword = req.query.keyword as string | undefined;

  if (!filter) {
    filter = "통합검색";
  }

  try {
    let query: FilterQuery<IBook> = {};

    if (keyword && keyword.trim() !== "" && keyword !== "undefined") {
      keyword = decodeURIComponent(keyword);

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

    const docsLength = await Book.countDocuments(query);

    if (docsLength === 0 || typeof docsLength === "number") {
      return res.status(200).json(docsLength);
    } else if (docsLength === undefined) {
      throw new HttpException(404, "Document not found.");
    }
  } catch (err) {
    next(err);
  }
};
