import { NextFunction, Request, Response } from "express";

import { handleRegister } from "../services/register";

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
