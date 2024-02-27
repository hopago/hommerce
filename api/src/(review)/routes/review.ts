import express from "express";
import {
  deleteReview,
  getReviews,
  postReview,
  updateReview,
} from "../controllers/review";

const router = express.Router();

router.route("/book/:bookId").get(getReviews);

router
  .route("/user/:userId")
  .post(postReview)
  .patch(updateReview)
  .delete(deleteReview);

export default router;
