import express from "express";
import {
  deleteFavorItem,
  getFavorList,
  postFavorList,
  updateFavorItem,
} from "../controllers/favor";

const router = express.Router();

router
  .route("/:userId")
  .get(getFavorList)
  .post(postFavorList)
  .patch(updateFavorItem)
  .delete(deleteFavorItem);

export default router;
