import { NextFunction, Request, Response } from "express";

import { HttpException } from "../../middleware/error/utils";

import User from "../model/user";

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
    await newUser.save();

    return newUser;
  } catch (err) {
    next(err);
  }
};
