import { NextFunction, Request } from "express";
import User from "../model/user";
import { HttpException } from "../../middleware/error/utils";

export const handleGetCurrUser = async (req: Request, next: NextFunction) => {
  const { id } = req.body;
  if (!id) throw new HttpException(400, "Id is required.");

  try {
    const user = User.findOne({
      id,
    });
    if (!user) throw new HttpException(404, "User not found.");

    return user;
  } catch (err) {
    next(err);
  }
};
