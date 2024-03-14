import { Document } from "mongoose";
import { Types } from "mongoose";

export type DBResponse<T> = (Document<unknown, {}, T> &
  T & {
    _id: Types.ObjectId;
  })[];
