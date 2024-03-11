import { create } from "zustand";

interface CreatorUseFilterReviews {
  sort: "desc" | "asc";
  filter: FilterOption;
  searchTerm: string;
  setSort: () => void;
  setFilter: (filter: FilterOption) => void;
  setSearchTerm: (searchTerm: string) => void;
  resetSearchState: () => void;
}

export const useFilterReviews = create<CreatorUseFilterReviews>((set) => ({
  sort: "desc",
  filter: "검색 옵션",
  searchTerm: "",
  setSort: () =>
    set((state) => {
      const currSort = state.sort;

      currSort === "desc" ? (state.sort = "asc") : (state.sort = "desc");

      return {
        ...state,
      };
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
