import { Document, Schema, Types, model } from "mongoose";

export interface IReviewReply extends Document {
  _id: Types.ObjectId;
  userId: string;
  reviewId: string;
  username: string;
  desc: string;
  createdAt: Date;
  updatedAt: Date;
}

const reviewReplySchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    reviewId: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const ReviewReply = model<IReviewReply>("ReviewReply", reviewReplySchema);

export default ReviewReply;
