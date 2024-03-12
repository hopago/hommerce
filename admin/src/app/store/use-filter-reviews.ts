import { create } from "zustand";

interface CreatorUseFilterReviews {
  sort: "최신순" | "오래된순";
  filter: FilterOption;
  searchTerm: string;
  setSort: (sort: "최신순" | "오래된순") => void;
  setFilter: (filter: FilterOption) => void;
  setSearchTerm: (searchTerm: string) => void;
  resetSearchState: () => void;
}

export const useFilterReviews = create<CreatorUseFilterReviews>((set) => ({
  sort: "최신순",
  filter: "검색 옵션",
  searchTerm: "",
  setSort: (sort: "최신순" | "오래된순") =>
    set({
      sort,
    }),
  setFilter: (filter: FilterOption) =>
    set({
      filter,
    }),
  setSearchTerm: (searchTerm: string) =>
    set({
      searchTerm,
    }),
  resetSearchState: () =>
    set({
      sort: "최신순",
      filter: "검색 옵션",
      searchTerm: "",
    }),
}));
