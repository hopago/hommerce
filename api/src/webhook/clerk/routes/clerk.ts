import express from "express";

import { clerkUserCreated } from "../controller/clerk";

const router = express.Router();

router.route("/").post(clerkUserCreated);

export default router;
