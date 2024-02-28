import { Schema, model, Document } from "mongoose";

export interface IPoint extends Document {
  userId: string;
  point: number;
}

const pointSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    point: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Point = model<IPoint>("Point", pointSchema);

export default Point;
