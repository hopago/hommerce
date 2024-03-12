import { useFilterReviews as creatorFilterReviews } from "@/app/store/use-filter-reviews";

import { useState, useCallback } from "react";

export function useFilterReviews() {
  const {
    filter,
    setFilter,
    sort,
    setSort,
    searchTerm,
    setSearchTerm,
    resetSearchState,
  } = creatorFilterReviews();

  const [show, setShow] = useState(false);

  const toggleShow = useCallback(() => setShow((prev) => !prev), []);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    [setSearchTerm]
  );

  const handleSort = useCallback(
    (sort: "최신순" | "오래된순") => {
      setSort(sort);
      setShow(false);
    },
    [setSort]
  );

  const handleReset = useCallback(() => {
    resetSearchState();
    setShow(false);
  }, [resetSearchState]);

  return {
    show,
    setShow,
    toggleShow,
    sort,
    handleSort,
    handleSearch,
    handleReset,
    filter,
    setFilter,
    searchTerm,
  };
}
