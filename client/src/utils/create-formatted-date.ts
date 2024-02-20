import { format } from "date-fns";

export const formatDate = (date: Date | string) => {
  const formattedDate = format(date, "yy-MM-dd");

  return formattedDate.replace(/-/g, ".");
};
