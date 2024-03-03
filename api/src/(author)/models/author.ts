import { Schema, model, Document, Types } from "mongoose";

export interface IAuthor extends Document {
  _id: Types.ObjectId;
  name: string;
  job: AuthorType;
  intro: string;
  books: TBookOptional[];
  representBook: string;
  img: string;
  createdAt: Date;
  updatedAt: Date;
}

const authorSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    job: {
      type: String,
      require: true,
    },
    intro: {
      type: String,
      require: true,
    },
    books: {
      type: [Object],
      require: true,
    },
    representBook: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Author = model<IAuthor>("Author", authorSchema);

export default Author;
