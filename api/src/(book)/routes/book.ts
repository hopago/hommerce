import express from "express";
import {
  deleteBook,
  getBook,
  getBooks,
  postBook,
  updateBook,
} from "../controllers/book";

const router = express.Router();

router.route("/")
  .get(getBooks)
  .post(postBook);

router
  .route("/:bookId")
  .get(getBook)
  .patch(updateBook)
  .delete(deleteBook);

export default router;
