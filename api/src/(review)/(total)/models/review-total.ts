import { Document, Schema, Types, model } from "mongoose";

export interface IReviewTotal extends Document {
  _id: Types.ObjectId;
  bookId: string;
  recordedRating: Record<ReviewRatingType, number>;
  totalRating: number;
  ratingEachPert: Partial<Record<ReviewRatingType, number>>;
  recordedKeyword: Record<ReviewKeywords, number>;
  totalKeyword: ReviewKeywords;
  keywordEachPert: Partial<Record<ReviewKeywords, number>>;
}

const reviewTotal = new Schema({
  bookId: {
    type: String,
    require: true,
  },
  recordedRating: {
    type: Object,
    require: true,
  },
  totalRating: {
    type: Number,
    require: true,
  },
  ratingEachPert: {
    type: Object,
    require: true,
  },
  recordedKeyword: {
    type: Object,
    require: true,
  },
  totalKeyword: {
    type: String,
    require: true,
  },
  keywordEachPert: {
    type: Object,
    require: true,
  },
});

const ReviewTotal = model<IReviewTotal>("ReviewTotal", reviewTotal);

export default ReviewTotal;
