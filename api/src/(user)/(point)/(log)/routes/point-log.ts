import express from "express";
import {
  deleteUserPointLog,
  getUserPointLog,
  updateUserPointLog,
} from "../controller/point-log";

const router = express.Router();

router
  .route("/:userId")
  .get(getUserPointLog)
  .patch(updateUserPointLog)
  .delete(deleteUserPointLog);

export default router;
