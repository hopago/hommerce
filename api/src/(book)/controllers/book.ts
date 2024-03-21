import { NextFunction, Request, Response } from "express";
import { handleGetBooks } from "../services/getBooks";
import { handlePostBook } from "../services/postBook";
import { handleGetBook } from "../services/getBook";
import { handleUpdateBook } from "../services/updateBook";
import { handleDeleteBook } from "../services/deleteBook";
import { HttpException } from "../../middleware/error/utils";
import { IBook } from "../models/book";
import { handleGetBooksBySearchTerm } from "../services/getBooksBySearchTerm";
import { DBResponse } from "../../types/response";
import { handleUpdateImage } from "../services/updateImage";
import { handleDeleteImage } from "../services/handleDeleteImage";

type FilterType = "통합검색" | "제목" | "저자";

type PaginatedResponse = {
  pagination?:
    | {
        currentPage: number;
        totalPages: number;
      }
    | undefined;
  books: DBResponse<IBook>;
};

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const filter = req.query.filter as FilterType | undefined;
  const keyword = req.query.keyword as string;
  const sort = decodeURIComponent(req.query.sort as string) as
    | "최신순"
    | "오래된순";
  const pageNum = req.query.pageNum as number | undefined;

  try {
    const books: PaginatedResponse | undefined =
      await handleGetBooksBySearchTerm(
        { keyword: decodeURIComponent(keyword), filter, sort, pageNum },
        next
      );

    if (books) {
      return res.status(200).json(books);
    }
  } catch (err) {
    next(err);
  }
};

export const postBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newBook = await handlePostBook(req, next);

    return res.status(201).json(newBook);
  } catch (err) {
    next(err);
  }
};

export const updateImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;
    if (!bookId) throw new HttpException(400, "Book Id required.");

    const {
      updatedImageUrl,
      imageUrl,
    }: { updatedImageUrl: string; imageUrl: string } = req.body;
    if (!updatedImageUrl || !imageUrl)
      throw new HttpException(400, "Image url required.");

    const updatedBook = await handleUpdateImage(
      { bookId, imageUrl, updatedImageUrl },
      next
    );

    return res.status(201).json(updatedBook);
  } catch (err) {}
};

export const deleteImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bookId } = req.params;
    const { deletedImageUrl } = req.body;

    if (!bookId || !deletedImageUrl)
      throw new HttpException(400, "Book id or image url required.");

    try {
      await handleDeleteImage({ bookId, deletedImageUrl }, next);
    } catch (err) {
      next(err);
    }

    return res.status(204).json(deletedImageUrl);
  } catch (err) {
    next(err);
  }
};

export const getBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const book = await handleGetBook(req, next);

    return res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedBook = await handleUpdateBook(req, next);

    if (updatedBook) {
      return res.status(201).json(updatedBook);
    }
  } catch (err) {
    next(err);
  }
};

export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = await handleDeleteBook(req, next);
    if (!_id) throw new HttpException(500, `Internal Error: _id not found.`);

    return res.status(204).json({ deletedBookId: _id });
  } catch (err) {
    next(err);
  }
};
