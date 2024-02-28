import express from "express";
import {
  deleteTotal,
  getTotal,
  postTotal,
  updateTotal,
} from "../controllers/review-total";

const router = express.Router();

router
  .route("/:bookId")
  .get(getTotal)
  .post(postTotal)
  .patch(updateTotal) // TODO: Update Review -> exec()
  .delete(deleteTotal); // TODO: Delete Book & Delete review -> exec()

export default router;
