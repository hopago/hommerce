import { atom } from "recoil";

export const searchFilterState = atom<SearchType>({
  key: "searchFilterState",
  default: "통합검색",
});
