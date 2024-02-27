import { Schema, model, Document } from "mongoose";

interface ICart extends Document {
  userId: string;
  books: CartList;
}

const cartSchema = new Schema(
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

const Cart = model<ICart>("Cart", cartSchema);

export default Cart;
