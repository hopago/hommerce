import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import { UserInfo, findUser } from "./findUser";
import User, { IUser } from "../model/user";

export const handleGetCurrUser = async (
  req: Request,
  next: NextFunction
): Promise<UserInfo | undefined> => {
  const userId = req.query.userId as string | undefined;
  if (!userId) throw new HttpException(400, "User Id required.");

  try {
    const currUser: any = await User.findOne({
      id: userId,
    });
    if (!currUser) throw new HttpException(404, "User not found.");

    const { id, _id, ...userInfo } = currUser._doc as IUser;

    return userInfo as UserInfo;
  } catch (err) {
    next(err);
  }
};
