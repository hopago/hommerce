import { Types } from "mongoose";

type ReviewTotal = {
  _id: Types.ObjectId;
  bookId: string;
  totalRating: number;
  totalKeyword: string;
  createdAt: Date;
  updatedAt: Date;
};
