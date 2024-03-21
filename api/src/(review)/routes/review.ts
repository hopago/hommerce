import express from "express";
import {
  deleteReview,
  deleteReviewById,
  getDocsLength,
  getReviewByUserId,
  getReviews,
  postReview,
  updateReview,
} from "../controllers/review";

const router = express.Router();

router.route("/").delete(deleteReviewById);

router.route("/book/docs").get(getDocsLength);

router.route("/book/:bookId").get(getReviews);

router
  .route("/user/:userId")
  .get(getReviewByUserId)
  .post(postReview)
  .patch(updateReview)
  .delete(deleteReview);

export default router;
