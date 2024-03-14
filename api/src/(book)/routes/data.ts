import express from "express";
import { increaseView } from "../services/increaseView";

const router = express.Router();

router.route("/:bookId").patch(increaseView);

export default router;
