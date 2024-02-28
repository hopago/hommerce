import { Schema, model, Document } from "mongoose";

export interface IFavor extends Document {
  userId: string;
  books: FavorItem[];
}

const favorSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    books: {
      type: [Object],
    },
  },
  {
    timestamps: true,
  }
);

const Favor = model<IFavor>("Favor", favorSchema);

export default Favor;
