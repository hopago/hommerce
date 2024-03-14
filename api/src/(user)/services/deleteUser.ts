import { NextFunction, Request } from "express";
import User from "../model/user";
import { handleDatabaseOperation } from "../../utils/db-operation";
import { handleDeletePoint } from "../(point)/services/deletePoint";
import { HttpException } from "../../middleware/error/utils";
import { handleDeletePointLog } from "../(point)/(log)/services/deletePointLog";

export const handleDeleteUser = async (req: Request, next: NextFunction) => {
  const userId = req.query.userId as string | undefined;
  if (!userId) throw new HttpException(400, "User Id required.");

  try {
    await handleDatabaseOperation(
      User.findOneAndDelete({
        id: userId,
      }),
      next
    );

    await handleDatabaseOperation(handleDeletePoint({ userId }, next), next);

    await handleDatabaseOperation(handleDeletePointLog(userId, next), next);
  } catch (err) {
    next(err);
  }
};
