import { create } from "zustand";

import { PointFilterOptions } from "../ui/(dashboard)/(home)/users/management/[username]/_components/FilterPointLogs";

interface CreatorUseFilterReviews {
  sort: "최신순" | "오래된순";
  filter: PointFilterOptions;
  searchTerm: string;
  enabled: boolean;
  setSort: (sort: "최신순" | "오래된순") => void;
  setFilter: (filter: PointFilterOptions) => void;
  setSearchTerm: (searchTerm: string) => void;
  setEnabled: (param: boolean) => void;
  resetSearchState: () => void;
}

export const creatorFilterPoints = create<CreatorUseFilterReviews>((set) => ({
  sort: "최신순",
  filter: "검색 옵션",
  searchTerm: "",
  enabled: true,
  setSort: (sort: "최신순" | "오래된순") =>
    set({
      enabled: false,
      sort,
    }),
  setFilter: (filter: PointFilterOptions) =>
    set({
      enabled: false,
      filter,
    }),
  setSearchTerm: (searchTerm: string) =>
    set({
      enabled: false,
      searchTerm,
    }),
  setEnabled: (enabled: boolean) => {
    set({
      enabled,
    });
  },
  resetSearchState: () =>
    set({
      enabled: true,
      sort: "최신순",
      filter: "검색 옵션",
      searchTerm: "",
    }),
}));
