import { useSearchForm } from "../hooks/use-search-form";

import SearchBar from "./SearchBar";
import FixedSearchBar from "./FixedSearchBar";

import { useParams } from "react-router-dom";

import { useCustomMediaQuery } from "../hooks/use-media-query";

export default function SearchSection() {
  const { bookId } = useParams<{ bookId: string }>();

  const { onSubmit, onChange, searchTerm } = useSearchForm();

  const { isScrolled } = useCustomMediaQuery({ bookId: bookId! });

  return (
    <>
      <SearchBar
        onChange={onChange}
        onSubmit={onSubmit}
        searchTerm={searchTerm}
        isScrolled={isScrolled}
      />
      {isScrolled && (
        <FixedSearchBar
          onChange={onChange}
          onSubmit={onSubmit}
          searchTerm={searchTerm}
        />
      )}
    </>
  );
}
