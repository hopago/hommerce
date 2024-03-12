import { useFilterReviews as creatorFilterReviews } from "@/app/store/use-filter-reviews";

import { useState, useCallback, useEffect, FormEvent } from "react";

import { toast } from "sonner";

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

  const [clientSearch, setClientSearch] = useState("");
  const [clientFilter, setClientFilter] = useState<FilterOption>("검색 옵션");

  const toggleShow = useCallback(() => setShow((prev) => !prev), []);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setClientSearch(e.target.value);
  }, []);

  const handleSort = useCallback((sort: "최신순" | "오래된순") => {
    setSort(sort);
    setShow(false);
  }, []);

  const handleReset = useCallback(() => {
    resetSearchState();
    setClientFilter("검색 옵션");
    setClientSearch("");
    setShow(false);
  }, [resetSearchState]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (clientFilter && clientSearch.trim() === "") {
      toast.message("검색어를 입력해주세요.");
    }

    setSearchTerm(clientSearch);
    setFilter(clientFilter);

    setClientFilter("검색 옵션");
    setClientSearch("");
  };

  useEffect(() => {
    setShow(false);
  }, [clientFilter, sort]);

  return {
    show,
    setShow,
    toggleShow,
    sort,
    handleSort,
    handleSearch,
    handleReset,
    clientFilter,
    setClientFilter,
    searchTerm,
    clientSearch,
    setClientSearch,
    filter,
    handleSubmit,
  };
}
