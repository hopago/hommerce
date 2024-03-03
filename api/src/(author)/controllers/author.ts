import { NextFunction, Request, Response } from "express";
import { handleGetAuthors } from "../services/getAuthors";
import { handlePostAuthor } from "../services/postAuthor";
import { handleGetAuthor } from "../services/getAuthor";
import { handleUpdateAuthor } from "../services/updateAuthor";
import { handleDeleteAuthor } from "../services/deleteAuthor";

export const getAuthors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authors = await handleGetAuthors(next);

    return res.status(200).json(authors);
  } catch (err) {
    next(err);
  }
};

export const postAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newAuthor = await handlePostAuthor(req, next);

    return res.status(201).json(newAuthor);
  } catch (err) {
    next(err);
  }
};

export const getAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const author = await handleGetAuthor(req, next);

    return res.status(200).json(author);
  } catch (err) {
    next(err);
  }
};

export const updateAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedAuthor = await handleUpdateAuthor(req, next);

    return res.status(201).json(updatedAuthor);
  } catch (err) {
    next(err);
  }
};

export const deleteAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const _id = await handleDeleteAuthor(req, next);

    return res.status(204).json({ authorId: _id });
  } catch (err) {
    next(err);
  }
};
