import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import User, { IUser } from "../model/user";

export const handleGetCurrUser = async (
  req: Request,
  next: NextFunction
): Promise<IUser | undefined> => {
  const userId = req.query.userId as string | undefined;
  if (!userId) throw new HttpException(400, "User Id required.");

  try {
    const currUser: any = await User.findOne({
      id: userId,
    });
    if (!currUser) throw new HttpException(404, "User not found.");

    return currUser;
  } catch (err) {
    next(err);
  }
};
