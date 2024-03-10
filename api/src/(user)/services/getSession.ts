import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import { clerkClient } from "../../config/clerkClient";

export const handleGetSession = async (req: Request, next: NextFunction) => {
  const userId = req.query.userId as string | undefined;
  if (!userId) throw new HttpException(400, "User Id required.");

  try {
    // TODO: Clerk 플랜 가입 시 이용 가능
    // const { status, lastActiveAt, expireAt, abandonAt } =
    //   await clerkClient.sessions.getSession(userId);

    // const session = {
    //   status,
    //   lastActiveAt,
    //   expireAt,
    //   abandonAt,
    // };

    // return session;

    // 임시 세션
    const { lastSignInAt } = await clerkClient.users.getUser(userId);

    return lastSignInAt;
  } catch (err) {
    next(err);
  }
};
