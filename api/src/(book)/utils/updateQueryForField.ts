import { UpdateQuery } from "mongoose";
import { IBook } from "../models/book";
import { HttpException } from "../../middleware/error/utils";

export function updateQueryForField(
  bookToUpdate: IBook,
  updateQuery: UpdateQuery<IBook>,
  field: "parentCategory" | "sellType",
  value: any,
  conditionLength: number
) {
  if (bookToUpdate[field]) {
    const action: "$pull" | "$push" = bookToUpdate[field].includes(value)
      ? "$pull"
      : "$push";

    if (action === "$pull" && bookToUpdate[field].length < conditionLength) {
      throw new HttpException(400, "Field need at least one item.");
    }

    const operation = action === "$push" ? { $each: [value] } : value;

    updateQuery[action] = updateQuery[action] || {};
    if (bookToUpdate[field].length >= conditionLength) {
      updateQuery[action]![field] = operation;
    } else {
      if (action === "$push") {
        updateQuery[action]![field] = { $each: [value] };
      } else {
        // $pull 작업이지만, conditionLength 보다 배열 길이가 작은 경우는 이미 처리됨
        updateQuery[action]![field] = value;
      }
    }
  }
}
