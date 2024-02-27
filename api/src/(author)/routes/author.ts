import express from "express";
import { deleteAuthor, getAuthor, getAuthors, postAuthor, updateAuthor } from "../controllers/author";

const router = express.Router();

router
  .route("/")
  .get(getAuthors)
  .post(postAuthor);

router
  .route("/:authorId")
  .get(getAuthor)
  .patch(updateAuthor)
  .delete(deleteAuthor);

export default router;
