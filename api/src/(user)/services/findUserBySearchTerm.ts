import { NextFunction } from "express";
import isEmail from "../utils/isEmail";
import { getValidSearchTerm } from "../utils/getValidSearchTerm";
import { findUser } from "./findUser";
import { IUser } from "../model/user";

export const findUserBySearchTerm = async (
  keyword: string,
  next: NextFunction
): Promise<IUser[] | undefined> => {
  const condition = isEmail(keyword)
    ? { email: keyword }
    : { username: getValidSearchTerm(keyword) };

  return await findUser(condition, next);
};
