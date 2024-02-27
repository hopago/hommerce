import express from "express";
import {
  deleteCartItem,
  getCartList,
  postCartItem,
  updateCartList,
} from "../controllers/cart";

const router = express.Router();

router
  .route("/:userId")
  .get(getCartList)
  .post(postCartItem)
  .patch(updateCartList)
  .delete(deleteCartItem);

export default router;
