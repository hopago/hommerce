import { create } from "zustand";

import { PointFilterOption } from "../ui/(dashboard)/(home)/users/management/[username]/_components/FilterPointLogs";
import { BookFilterOption } from "../ui/(dashboard)/(home)/books/_components/FilterBooks";

interface CreatorUseFilterReviews<T> {
  sort: "최신순" | "오래된순";
  filter: T;
  searchTerm: string;
  enabled: boolean;
  setSort: (sort: "최신순" | "오래된순") => void;
  setFilter: (filter: T) => void;
  setSearchTerm: (searchTerm: string) => void;
  setEnabled: (param: boolean) => void;
  resetSearchState: () => void;
}

export const creatorFilter = <T>(initialFilter: T) =>
  create<CreatorUseFilterReviews<T>>((set) => ({
    sort: "최신순",
    filter: initialFilter,
    searchTerm: "",
    enabled: true,
    shouldRefetch: true,
    setSort: (sort: "최신순" | "오래된순") =>
      set({
        enabled: false,
        sort,
      }),
    setFilter: (filter: T) =>
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
    setShouldRefetch: (enabled: boolean) => {
      set({
        enabled,
      });
    },
    resetSearchState: () =>
      set({
        enabled: true,
        sort: "최신순",
        filter: initialFilter,
        searchTerm: "",
      }),
  }));

export const creatorFilterPoints =
  creatorFilter<PointFilterOption>("검색 옵션");

export const creatorFilterReviews = creatorFilter<FilterOption>("검색 옵션");

export const creatorFilterBooks = creatorFilter<BookFilterOption>("통합검색");
