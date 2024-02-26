import { NextFunction } from "express";
import Book from "../models/book";

export const handleGetBooks = async (next: NextFunction) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 }).limit(12);

    return books;
  } catch (err) {
    next(err);
  }
};
