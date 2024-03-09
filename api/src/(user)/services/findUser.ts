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
    const users = await User.find({
      username: { $regex: `^${condition.username}`, $options: "i" },
    });

    const filterUserInfo = users.reduce((acc: any[], user: any) => {
      const { _id, id, ...userInfo } = user._doc as IUser;
      acc.push(userInfo);
      return acc;
    }, []);

    return filterUserInfo as UserInfo[];
  } catch (err) {
    next(err);
  }
};
