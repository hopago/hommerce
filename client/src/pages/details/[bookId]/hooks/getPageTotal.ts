import { PAGE_SIZE } from "../../../constants/page";

export const getPageTotal = (length: number) => {
  return Math.ceil(length / PAGE_SIZE);
};
