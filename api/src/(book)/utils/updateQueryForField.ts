import { UpdateQuery } from "mongoose";
import { HttpException } from "../../middleware/error/utils";
import { IBook } from "../models/book";

export function updateQueryForField(
  bookToUpdate: IBook,
  updateQuery: UpdateQuery<IBook>,
  field: "parentCategory" | "sellType",
  value: any,
  conditionLength: number
) {
  if (bookToUpdate[field]) {
    if (!Array.isArray(bookToUpdate[field])) {
      throw new HttpException(400, `${field} must be an array.`);
    }

    const action: "$pull" | "$push" = bookToUpdate[field].includes(value)
      ? "$pull"
      : "$push";

    if (action === "$pull" && bookToUpdate[field].length < conditionLength) {
      throw new HttpException(400, "Field need at least one item.");
    }

    let operation;
    if (Array.isArray(bookToUpdate[field])) {
      operation = action === "$push" ? { $each: [value] } : value;
    } else {
      operation = value;
    }

    updateQuery[action] = updateQuery[action] || {};
    if (
      Array.isArray(bookToUpdate[field]) &&
      bookToUpdate[field].length >= conditionLength
    ) {
      updateQuery[action]![field] = operation;
    } else {
      if (action === "$push" && Array.isArray(bookToUpdate[field])) {
        updateQuery[action]![field] = { $each: [value] };
      } else {
        updateQuery[action]![field] = value;
      }
    }
  }
}
