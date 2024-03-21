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
  .patch(updateTotal)
  .delete(deleteTotal);

export default router;
