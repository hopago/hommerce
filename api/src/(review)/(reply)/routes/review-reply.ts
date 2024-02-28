import express from "express";
import {
  deleteReply,
  getReplies,
  postReply,
  updateReply,
} from "../controllers/review-reply";

const router = express.Router();

router
  .route("/reply/:reviewId")
  .get(getReplies)
  .post(postReply)
  .patch(updateReply)
  .delete(deleteReply);

export default router;
