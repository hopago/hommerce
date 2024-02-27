import { Schema, model, Document } from "mongoose";

interface IList extends Document {
  userId: string;
  title: string;
  books: List;
}

const listSchema = new Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    title: {
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

const List = model<IList>("List", listSchema);

export default List;
