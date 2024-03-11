import { create } from "zustand";

interface CreatorUseFilterReviews {
  sort: "desc" | "asc";
  filter: FilterOption;
  searchTerm: string;
  setSort: (sort: "desc" | "asc") => void;
  setFilter: (filter: FilterOption) => void;
  setSearchTerm: (searchTerm: string) => void;
  resetSearchState: () => void;
}

export const useFilterReviews = create<CreatorUseFilterReviews>((set) => ({
  sort: "desc",
  filter: "검색 옵션",
  searchTerm: "",
  setSort: (sort: "desc" | "asc") =>
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
      filter: "검색 옵션",
      searchTerm: "",
    }),
}));
