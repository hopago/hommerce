import { atom } from "recoil";

export const selectedCartState = atom<SearchType>({
  key: "searchState",
  default: "통합검색",
});