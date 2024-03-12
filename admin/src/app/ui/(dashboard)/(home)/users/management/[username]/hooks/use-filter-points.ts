import { creatorFilterPoints } from "@/app/store/use-filter-points";

import { useState, useCallback, useEffect, FormEvent } from "react";

import { toast } from "sonner";

export function useFilterPoints() {
  const {
    filter,
    setFilter,
    sort,
    setSort,
    searchTerm,
    setSearchTerm,
    resetSearchState,
    enabled,
  } = creatorFilterPoints();

  const [show, setShow] = useState(false);

  const toggleShow = useCallback(() => setShow((prev) => !prev), []);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleSort = useCallback((sort: "최신순" | "오래된순") => {
    setSort(sort);
    setShow(false);
  }, []);

  const handleReset = useCallback(() => {
    resetSearchState();
    setShow(false);
  }, [resetSearchState]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (filter && searchTerm.trim() === "") {
      toast.message("검색어를 입력해주세요.");
    }

    resetSearchState();
  };

  useEffect(() => {
    setShow(false);
  }, [filter, sort]);

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
    setSearchTerm,
    handleSubmit,
  };
}
