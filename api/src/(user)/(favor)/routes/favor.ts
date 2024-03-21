import express from "express";
import {
  deleteFavorItem,
  getFavorLengthByBookId,
  getFavorList,
  postFavorList,
  updateFavorItem,
} from "../controllers/favor";
import { isSubscribed } from "../controllers/subscriptionStatusController";

const router = express.Router();

router.route("/subscription/user/:userId/book/:bookId").get(isSubscribed);

router.route("/docs/book/:bookId").get(getFavorLengthByBookId);

router
  .route("/:userId")
  .get(getFavorList)
  .post(postFavorList)
  .patch(updateFavorItem)
  .delete(deleteFavorItem);

export default router;
