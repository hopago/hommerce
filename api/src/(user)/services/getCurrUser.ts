import { NextFunction, Request } from "express";
import User from "../model/user";
import { HttpException } from "../../middleware/error/utils";

export const handleGetCurrUser = async (req: Request, next: NextFunction) => {
  const userId = req.query.userId as string | undefined;
  if (!userId) throw new HttpException(400, "User Id required.");

  try {
    const user = await User.findOne({
      id: userId,
    });
    if (!user) throw new HttpException(404, "User not found.");

    return user;
  } catch (err) {
    next(err);
  }
};
