import { NextFunction, Request } from "express";
import User from "../model/user";
import { HttpException } from "../../middleware/error/utils";

export const handleUpdateUser = async (req: Request, next: NextFunction) => {
  const { imageUrl, username, id } = req.body;
  const currUser = await User.findOne({
    id,
  });
  if (!currUser) throw new HttpException(404, "User not found.");

  const newImageUrl = imageUrl ?? currUser.imageUrl;
  const newUsername = username ?? currUser.username;

  try {
    const newUser = await currUser.updateOne(
      {
        imageUrl: newImageUrl,
        username: newUsername,
      },
      {
        new: true,
      }
    );

    return newUser;
  } catch (err) {
    next(err);
  }
};
