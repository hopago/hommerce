import { atom } from "recoil";

export const searchSortState = atom<SearchSort>({
  key: "searchSortState",
  default: "인기순",
});
