import { NextFunction } from "express";
import Author from "../models/author";

export const handleGetAuthors = async (next: NextFunction) => {
  try {
    const authors = await Author.find().sort({ createdAt: -1 }).limit(7);

    return authors;
  } catch (err) {
    next(err);
  }
};
