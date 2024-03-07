import { NextFunction, Request } from "express";
import { HttpException } from "../../middleware/error/utils";
import User, { IUser } from "../model/user";
import { handleDatabaseOperation } from "../../utils/db-operation";
import { handlePostPoint } from "../(point)/services/postPoint";

export const handleRegister = async (req: Request, next: NextFunction) => {
  try {
    const { username, imageUrl, id, email } = req.body;
    if (!username || !imageUrl || !id || !email)
      throw new HttpException(400, "Username & ImageUrl & ID are required.");

    const duplicate = await User.findOne({
      id,
      username,
      email,
    });
    if (duplicate) throw new HttpException(409, "Username should be unique.");

    const newUser = new User({
      id,
      username,
      email,
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
