import express from "express";
import {
  deleteBook,
  deleteImage,
  getBook,
  getBooks,
  postBook,
  updateBook,
  updateImage,
} from "../controllers/book";
import { getDocsLength } from "../services/getDocsLength";

const router = express.Router();

router.route("/").get(getBooks).post(postBook);

router.route("/docs").get(getDocsLength);

router.route("/:bookId/i").patch(updateImage).delete(deleteImage);

router.route("/:bookId").get(getBook).patch(updateBook).delete(deleteBook);

export default router;
