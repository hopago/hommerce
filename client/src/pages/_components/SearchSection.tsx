import { useSearchForm } from "../hooks/use-search-form";

import SearchBar from "./SearchBar";
import FixedSearchBar from "./FixedSearchBar";
import { useLayoutEffect, useState } from "react";

export default function SearchSection() {
  const { onSubmit, onChange, searchTerm } = useSearchForm();

  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    const setCurrScroll = () => {
      setTimeout(() => {
        setScrollY(window.scrollY);
      }, 300);
    };

    window.addEventListener("scroll", setCurrScroll);

    return () => {
      window.removeEventListener("scroll", setCurrScroll);
    };
  }, [isScrolled]);

  useLayoutEffect(() => {
    if (scrollY > 190) {
      setIsScrolled(true);
    } else if (scrollY <= 190) {
      setIsScrolled(false);
    }
  }, [scrollY]);

  return !isScrolled ? (
    <SearchBar
      onChange={onChange}
      onSubmit={onSubmit}
      searchTerm={searchTerm}
    />
  ) : (
    <FixedSearchBar
      onChange={onChange}
      onSubmit={onSubmit}
      searchTerm={searchTerm}
    />
  );
}
