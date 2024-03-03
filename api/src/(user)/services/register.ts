import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../middleware/error/utils";
import User, { IUser } from "../model/user";
import { handleDatabaseOperation } from "../../utils/db-operation";
import { handlePostPoint } from "../(point)/services/postPoint";

export const handleRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, imageUrl, id } = req.body;
    if (!username || !imageUrl || !id)
      throw new HttpException(400, "Username & ImageUrl & ID are required.");

    const duplicate = await User.findOne({
      username,
    });
    if (duplicate) throw new HttpException(409, "Username should be unique.");

    const newUser = new User({
      id,
      username,
      imageUrl,
    });

    const user = (await handleDatabaseOperation(newUser.save(), next)) as IUser;

    await handleDatabaseOperation(
      handlePostPoint({ userId: user._id.toString() }, next),
      next
    );

    return user;
  } catch (err) {
    next(err);
  }
};
