import { atom } from "recoil";

export const searchFilterState = atom<SearchFilter>({
  key: "searchFilter",
  default: "통합검색",
});
