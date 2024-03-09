import { Schema, model, Document } from "mongoose";

export interface IPointLogSchema extends Document {
  userId: string;
  point: number;
}

const pointLogSchema = new Schema(
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

const PointLog = model<IPointLogSchema>("PointLog", pointLogSchema);

export default PointLog;
