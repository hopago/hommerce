import express from "express";

import { register } from "../controller/user";

const router = express.Router();

router.route("/").get().put().delete();

router.route("/session").post(register);

export default router;
