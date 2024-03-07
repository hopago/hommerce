import { NextFunction } from "express";
import User, { IUser } from "../model/user";
import { HttpException } from "../../middleware/error/utils";

type UserCondition = Partial<Pick<IUser, "email" | "username" | "id">>;

export type UserInfo = Omit<IUser, "_id" | "id">;

export const findUser = async (
  condition: UserCondition,
  next: NextFunction
) => {
  try {
    const user = await User.findOne(condition);
    if (!user) throw new HttpException(404, "User not found.");

    const { _id, id, ...userInfo } = user as IUser;

    return userInfo as UserInfo;
  } catch (err) {
    next(err);
  }
};
