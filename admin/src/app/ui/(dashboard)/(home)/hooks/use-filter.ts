import { useState, useCallback, useEffect, FormEvent } from "react";

import { toast } from "sonner";

interface UseFilterProps<T> {
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

export function useFilter<T>(props: UseFilterProps<T>) {
  const {
    filter,
    setFilter,
    sort,
    setSort,
    searchTerm,
    setSearchTerm,
    resetSearchState,
    setEnabled,
  } = props;

  const [show, setShow] = useState(false);

  const toggleShow = useCallback(() => setShow((prev) => !prev), []);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleSort = useCallback((sort: "최신순" | "오래된순") => {
    setSort(sort);
    setEnabled(true);
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

    setEnabled(true);
  };

  useEffect(() => {
    setShow(false);
  }, [filter, sort]);

  useEffect(() => {
    handleReset();
  }, []);

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
