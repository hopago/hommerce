import { NextFunction, Request } from "express";

import User from "../model/user";

export const handleDeleteUser = async (req: Request, next: NextFunction) => {
  const { id } = req.body;

  try {
    await User.findOneAndDelete({
      id,
    });
  } catch (err) {
    next(err);
  }
};
