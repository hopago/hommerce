import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import clerkClient from "@clerk/clerk-sdk-node";

export const handleGetSession = async (req: Request, next: NextFunction) => {
  const userId = req.query.userId as string | undefined;
  if (!userId) throw new HttpException(400, "User Id required.");

  try {
    const { status, lastActiveAt, expireAt, abandonAt } =
      await clerkClient.sessions.getSession(userId);

    const session = {
      status,
      lastActiveAt,
      expireAt,
      abandonAt,
    };

    return session;
  } catch (err) {
    next(err);
  }
};
