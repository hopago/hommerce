import { NextFunction, Request, Response } from "express";

import { handleRegister } from "../services/register";
import { handleGetCurrUser } from "../services/getCurrUser";
import { handleUpdateUser } from "../services/updateUser";
import { handleDeleteUser } from "../services/deleteUser";
import { findUserBySearchTerm } from "../services/findUserBySearchTerm";
import { handleUpdatePassword } from "../services/updatePassword";
import { handleGetSession } from "../services/getSession";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = await handleRegister(req, next);

    return res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};

export const getCurrUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const keyword = req.query.keyword as string | undefined;

  try {
    const user = keyword
      ? await findUserBySearchTerm(keyword, next)
      : await handleGetCurrUser(req, next);

    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedUser = await handleUpdateUser(req, next);

    return res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await handleDeleteUser(req, next);

    return res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export const getSession = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const session = await handleGetSession(req, next);

    return res.status(200).json(session);
  } catch (err) {
    next(err);
  }
};

export const updatePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await handleUpdatePassword(req, next);

    return res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};
