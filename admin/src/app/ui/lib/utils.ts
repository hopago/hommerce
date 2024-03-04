import { type ClassValue, clsx } from "clsx";

import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const getFullDate = (date: Date | string) => {
  const formattedDate = format(new Date(date), "yy년 M월 d일");

  return formattedDate;
};
