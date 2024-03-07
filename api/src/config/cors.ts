import dotenv from "dotenv";

dotenv.config();

export const whiteList = [
  `${process.env.CLIENT_URL}`,
  `${process.env.ADMIN_URL}`,
];
