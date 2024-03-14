import express from "express";
import { getPopularCategories } from "../controllers/bookAnalytics";

const router = express.Router();

router.route("/a/popular/categories").get(getPopularCategories);

export default router;
