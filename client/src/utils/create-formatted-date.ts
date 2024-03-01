import { format } from "date-fns";

export const formatDate = (date: Date | string) => {
  const formattedDate = format(date, "yy-MM-dd");

  return formattedDate.replace(/-/g, ".");
};

export const getFullDate = (date: Date | string) => {
  const formattedDate = format(new Date(date), "yy년 M월 d일");

  return formattedDate;
};