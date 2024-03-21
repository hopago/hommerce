import { atom } from "recoil";

export const searchPageFilterState = atom<SearchFilter>({
  key: "searchPageFilterState",
  default: "통합검색",
});
