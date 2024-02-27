import { Request } from "express";
import { HttpException } from "../middleware/error/utils";

export const isFieldsFullFilled = (fields: string[], req: Request) => {
  for (const field of fields) {
    if (!req.body[field]) {
      throw new HttpException(400, `Field ${field} not fulfilled.`);
    }
  }
};
