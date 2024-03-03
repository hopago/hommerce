import { Document, Schema, Types, model } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId | string;
  id: string;
  username: string;
  imageUrl: string;
}

// TODO: 유저 로그 - 마지막 방문 일, 일주일 간 방문횟수

const userSchema = new Schema(
  {
    id: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    imageUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>("User", userSchema);

export default User;
