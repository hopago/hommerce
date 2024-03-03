import express from "express";
import {
  deletePoint,
  getPoint,
  postPoint,
  updatePoint,
} from "../controllers/point";

const router = express.Router();

router
  .route("/:userId")
  .get(getPoint)
  .post(postPoint)
  .patch(updatePoint)
  .delete(deletePoint);

export default router;
