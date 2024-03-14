import { Schema, model, Document } from "mongoose";

export interface IPointLog extends Document {
  userId: string;
  pointId: string;
  desc: string;
  amount: number;
}

const pointLogSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    pointId: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const PointLog = model<IPointLog>("PointLog", pointLogSchema);

export default PointLog;
