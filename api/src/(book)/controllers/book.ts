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
  const books = await handleGetBooks(next);

  return res.status(200).json(books);
};

export const postBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newBook = await handlePostBook(req, next);

  return res.status(201).json(newBook);
};

export const getBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const book = await handleGetBook(req, next);

  return res.status(200).json(book);
};

export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const updatedBook = await handleUpdateBook(req, next);

  return res.status(201).json(updatedBook);
};

export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await handleDeleteBook(req, next);

  return res.sendStatus(204);
};
