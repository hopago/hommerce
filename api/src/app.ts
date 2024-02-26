import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { connectDB } from "./config/dbConn";
import { whiteList } from "./config/cors";

import { errorHandler } from "./middleware/error/errorHandler";

import userRouter from "./(user)/routes/user";
import bookRouter from "./(book)/routes/book";

const app = express();
const port = 8000;

connectDB();

app.use(express.json());
app.use(
  cors({
    origin: whiteList,
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/book", bookRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Sever is listening on port:${port}`);
});
