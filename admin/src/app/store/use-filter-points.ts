import { create } from "zustand";

import { PointFilterOption } from "../ui/(dashboard)/(home)/users/management/[username]/_components/FilterPointLogs";

interface CreatorUseFilterReviews {
  sort: "최신순" | "오래된순";
  filter: PointFilterOption;
  searchTerm: string;
  enabled: boolean;
  setSort: (sort: "최신순" | "오래된순") => void;
  setFilter: (filter: PointFilterOption) => void;
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
  setFilter: (filter: PointFilterOption) =>
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
