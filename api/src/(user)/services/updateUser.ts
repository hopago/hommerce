import { NextFunction, Request } from "express";
import User from "../model/user";
import { HttpException } from "../../middleware/error/utils";
import { validateFields } from "../../utils/validateFields";
import isEmail from "../utils/isEmail";
import { filterUndefinedFieldOfObject } from "../../utils/filterUndefined";

export const handleUpdateUser = async (req: Request, next: NextFunction) => {
  const username = req.query.username as string | undefined;
  if (!username) throw new HttpException(400, "Username required.");

  const fields = ["imageUrl", "grade", "username", "email", "status"];

  validateFields(fields, req);

  const { username: updatedUsername, email } = req.body;

  if (email) {
    const isValid = isEmail(email);
    if (!isValid) throw new HttpException(400, "Invalid email.");
  }

  if (updatedUsername) {
    try {
      const isExist = await User.findOne({
        updatedUsername,
      });
      if (isExist) throw new HttpException(409, "User already exist.");
    } catch (err) {
      next(err);
    }
  }

  try {
    const updateData = filterUndefinedFieldOfObject(req);

    const newUser = await User.findOneAndUpdate(
      { username },
      {
        ...updateData,
      },
      {
        new: true,
      }
    );
    if (!newUser) throw new HttpException(404, "User not found.");

    return newUser;
  } catch (err) {
    next(err);
  }
};
