import { PAGE_THRESHOLD } from "../constants/pagination";

export const getPageTotal = (length: number) => {
  return Math.ceil(length / PAGE_THRESHOLD);
};
