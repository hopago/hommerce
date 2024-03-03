import express from "express";

import {
  deleteUser,
  getCurrUser,
  register,
  updateUser,
} from "../controller/user";

const router = express.Router();

router.route("/").get(getCurrUser).patch(updateUser).delete(deleteUser);

router.route("/session").post(register);

export default router;
