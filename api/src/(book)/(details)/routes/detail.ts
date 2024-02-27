import express from "express";
import {
  getBookDetails,
  postBookDetails,
  updateBookDetails,
} from "../controllers/details";

const router = express.Router();

router
  .route("/")
  .get(getBookDetails)
  .post(postBookDetails)
  .patch(updateBookDetails);

export default router;
