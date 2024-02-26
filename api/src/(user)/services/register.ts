import { NextFunction, Request, Response } from "express";

import { HttpException } from "../../middleware/error/utils";

import User from "../model/user";

export const handleRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, imageUrl } = req.body;
    if (!username || !imageUrl)
      throw new HttpException(400, "Username & ImageUrl are required.");

    const duplicate = await User.findOne({
      username,
    });
    if (duplicate) throw new HttpException(409, "Username should be unique.");

    const newUser = new User({
      username,
      imageUrl,
    });
    await newUser.save();

    return newUser;
  } catch (err) {
    next(err);
  }
};
