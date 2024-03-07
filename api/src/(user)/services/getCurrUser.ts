import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import { UserInfo, findUser } from "./findUser";

export const handleGetCurrUser = async (
  req: Request,
  next: NextFunction
): Promise<UserInfo | null | undefined> => {
  const userId = req.query.userId as string | undefined;
  if (!userId) throw new HttpException(400, "User Id required.");

  return await findUser({ id: userId }, next);
};
