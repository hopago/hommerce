import { useState } from "react";

export const useSearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchInput = formData.get("searchTerm");

    console.log(searchInput);

    {/* 검색 로직 */}

    setSearchTerm("");
  };

  return {
    searchTerm,
    onChange,
    onSubmit,
    setSearchTerm,
  };
};
