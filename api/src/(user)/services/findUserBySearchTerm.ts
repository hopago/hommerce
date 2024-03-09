import { NextFunction } from "express";
import isEmail from "../utils/isEmail";
import { getValidSearchTerm } from "../utils/getValidSearchTerm";
import { UserInfo, findUser } from "./findUser";

export const findUserBySearchTerm = async (
  keyword: string,
  next: NextFunction
): Promise<UserInfo[] | undefined> => {
  const condition = isEmail(keyword)
    ? { email: keyword }
    : { username: getValidSearchTerm(keyword) };

  return await findUser(condition, next);
};
