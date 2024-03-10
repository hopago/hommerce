import { NextFunction } from "express";
import User, { IUser } from "../model/user";

type UserCondition = Partial<Pick<IUser, "email" | "username" | "id">>;

export const findUser = async (
  condition: UserCondition,
  next: NextFunction
) => {
  try {
    const users = await User.find({
      username: { $regex: `^${condition.username}`, $options: "i" },
    });

    return users;
  } catch (err) {
    next(err);
  }
};
