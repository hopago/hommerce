import { Request } from "express";
import { HttpException } from "../middleware/error/utils";

export const validateFields = (fields: string[], req: Request) => {
  const validFieldsSet = new Set(fields);

  for (const field in req.body) {
    if (!validFieldsSet.has(field)) {
      throw new HttpException(400, `Field ${field} is not valid.`);
    }
  }
};
