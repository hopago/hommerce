import { useFilterReviews as creatorFilterReviews } from "@/app/store/use-filter-reviews";

import { useState, useCallback, useEffect } from "react";

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

  const toggleShow = () => setShow((prev) => !prev);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    [setSearchTerm]
  );

  const handleSort = (sort: "최신순" | "오래된순") => {
    setSort(sort);
  };

  const handleReset = () => resetSearchState();

  useEffect(() => {
    setShow(false);
  }, [filter]);

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
