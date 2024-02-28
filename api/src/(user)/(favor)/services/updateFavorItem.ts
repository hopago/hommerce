import { NextFunction, Request } from "express";
import Favor from "../models/favor";
import { isFieldsFullFilled } from "../../../utils/isFieldsFullFilled";
import { HttpException } from "../../../middleware/error/utils";

export const handleUpdateFavorItem = async (
  req: Request,
  next: NextFunction
) => {
  const validFields = ["title", "img", "author", "bookId"];

  try {
    isFieldsFullFilled(validFields, req);

    const updatedFavorList = await Favor.findOneAndUpdate(
      {
        userId: req.params.userId,
      },
      {
        $push: {
          books: req.body,
        },
      },
      {
        new: true,
      }
    );

    if (!updatedFavorList) {
      throw new HttpException(404, "No user found with this userId");
    }

    return updatedFavorList;
  } catch (err) {
    next(err);
  }
};
