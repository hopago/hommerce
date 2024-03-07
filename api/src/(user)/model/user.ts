import { Document, Schema, Types, model } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId | string;
  id: string;
  username: string;
  imageUrl: string;
  email: string; // req.body
  grade: UserGrade; // default 일반회원
  status: UserStatus; // default 활성화, 한달 접속 X -> 휴면 -> 이메일 인증
  createdAt: Date;
  updatedAt: Date;
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
    email: {
      type: String,
      require: true,
    },
    grade: {
      type: String,
      default: "일반회원",
    },
    status: {
      type: String,
      default: "활성화",
    },
  },
  {
    timestamps: true,
  }
);

const User = model<IUser>("User", userSchema);

export default User;
