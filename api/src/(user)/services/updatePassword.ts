import { NextFunction, Request } from "express";
import { isFieldsFullFilled } from "../../utils/isFieldsFullFilled";
import { HttpException } from "../../middleware/error/utils";
import { clerkClient } from "../../config/clerkClient";

const validatePassword = (password: string) => {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(password);
};

export const handleUpdatePassword = async (
  req: Request,
  next: NextFunction
) => {
  const userId = req.query.userId as string | undefined;
  if (!userId) throw new HttpException(400, "User Id required.");

  isFieldsFullFilled(["password"], req);

  const password = req.body.password as string;
  const isValid = validatePassword(password);
  if (!isValid) throw new HttpException(400, "Not valid password.");

  try {
    await clerkClient.users.updateUser(req.body.userId, {
      password,
    });
  } catch (err) {
    next(err);
  }
};
