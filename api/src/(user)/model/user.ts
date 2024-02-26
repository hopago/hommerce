import { Document, Schema, model } from "mongoose";

interface IUser extends Document {
  id: string;
  username: string;
  imageUrl: string;
}

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
