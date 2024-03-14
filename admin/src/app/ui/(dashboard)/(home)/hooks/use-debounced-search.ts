import { useState } from "react";

import useDebounce from "./use-debounce";

export const useDebouncedSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const debouncedSearchTerm = useDebounce({ value: searchTerm, delay: 750 });

  return {
    debouncedSearchTerm,
    handleChange,
    searchTerm,
    setSearchTerm,
  };
};
