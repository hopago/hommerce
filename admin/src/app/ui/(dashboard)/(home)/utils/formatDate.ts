import { format } from "date-fns";

export function formatDate(date: Date): string {
  return format(date, "yyyy년 M월 d일");
}
