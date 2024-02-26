import { NextFunction, Request, Response } from "express";

import { handleRegister } from "../services/register";
import { handleGetCurrUser } from "../services/getCurrUser";
import { handleUpdateUser } from "../services/updateUser";
import { handleDeleteUser } from "../services/deleteUser";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newUser = await handleRegister(req, res, next);

  if (newUser) {
    return res.status(204);
  }
};

export const getCurrUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const currUser = await handleGetCurrUser(req, next);

  if (currUser) {
    return res.status(200).json(currUser);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const updatedUser = await handleUpdateUser(req, next);

  if (updatedUser) {
    return res.status(200).json(updatedUser);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await handleDeleteUser(req, next);

  return res.sendStatus(204);
};
