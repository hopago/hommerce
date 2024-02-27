import { NextFunction, Request, Response } from "express";
import { handleGetBooks } from "../services/getBooks";
import { handlePostBook } from "../services/postBook";
import { handleGetBook } from "../services/getBook";
import { handleUpdateBook } from "../services/updateBook";
import { handleDeleteBook } from "../services/deleteBook";

export const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const books = await handleGetBooks(next);

    return res.status(200).json(books);
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

    return res.status(201).json(updatedBook);
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
    await handleDeleteBook(req, next);

    return res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
