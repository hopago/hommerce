import { Schema, model, Document } from "mongoose";

export interface IBook extends Document {
  images?: string[];
  representImg: string;
  parentCategory: BookParentCategoryList;
  category: BookSubCategory;
  title: string;
  author: string;
  discount?: number;
  price: number;
  eBookPrice?: number;
  unit: UnitType;
  comment?: string;
  desc: string;
  publisher: string;
  sellType: SellType;
  views: number;
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
      type: [String],
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
    views: {
      type: Number,
      default: 0,
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
      default: ["종이책"],
    },
  },
  {
    timestamps: true,
  }
);

const Book = model<IBook>("Book", bookSchema);

export default Book;
