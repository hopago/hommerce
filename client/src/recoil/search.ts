import { atom } from "recoil";

export const searchState = atom<SearchType>({
  key: "searchState",
  default: "통합검색",
});
