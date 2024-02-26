import { Schema, model, Document } from "mongoose";

interface IBook extends Document {
  images?: string[];
  representImg: string;
  parentCategory: BookParentCategory;
  category: BookSubCategory;
  title: string;
  author: string;
  discount?: string;
  price: number;
  eBookPrice?: number;
  unit: UnitType;
  comment?: string;
  desc: string;
  publisher: string;
  sellType?: SellType;
  createdAt: Date;
  updatedAt: Date;
}

const bookSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
      require: true,
    },
    representImg: {
      type: String,
      require: true,
    },
    parentCategory: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    unit: {
      type: String,
      require: true,
    },
    publisher: {
      type: String,
      require: true,
    },
    /* optional */
    comment: {
      type: String,
    },
    ebookPrice: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    images: {
      type: [String],
    },
    sellType: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Book = model<IBook>("Book", bookSchema);

export default Book;
