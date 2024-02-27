import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import morgan from "morgan";

import { connectDB } from "./config/dbConn";
import { whiteList } from "./config/cors";
import { PORT } from "./config/port";

import { errorHandler } from "./middleware/error/errorHandler";

import userRouter from "./(user)/routes/user";
import bookRouter from "./(book)/routes/book";
import bookDetailsRouter from "./(book)/(details)/routes/detail";
import authorRouter from "./(author)/routes/author";
import cartRouter from "./(user)/(cart)/routes/cart";
import reviewRouter from "./(review)/routes/review";

const app = express();

connectDB();

app.use(express.json());
app.use(
  cors({
    origin: whiteList,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(helmet());
app.use(morgan("dev"));

app.use("/author", authorRouter);
app.use("/book", bookRouter);
app.use("/book/:bookId/details", bookDetailsRouter);
app.use("/cart", cartRouter);
// app.use("/list", listRouter);
// app.use("/point", pointRouter);
app.use("/review", reviewRouter);
app.use("/user", userRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Sever is listening on port:${PORT}`);
});
