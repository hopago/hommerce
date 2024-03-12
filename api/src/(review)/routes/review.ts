import express from "express";
import {
  deleteReview,
  deleteReviewById,
  getReviewByUserId,
  getReviews,
  postReview,
  updateReview,
} from "../controllers/review";

const router = express.Router();

router.route("/").delete(deleteReviewById);

router.route("/book/:bookId").get(getReviews);

router
  .route("/user/:userId")
  .get(getReviewByUserId)
  .post(postReview)
  .patch(updateReview)
  .delete(deleteReview);

export default router;
