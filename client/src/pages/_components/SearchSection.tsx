import { useSearchForm } from "../hooks/use-search-form";

import SearchBar from "./SearchBar";
import FixedSearchBar from "./FixedSearchBar";

import { useLayoutEffect, useState } from "react";

import { useMediaQuery } from "usehooks-ts";

export default function SearchSection() {
  const { onSubmit, onChange, searchTerm } = useSearchForm();

  const isMedium = useMediaQuery("(max-width:740px)");

  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    if (isMedium) return;

    const setCurrScroll = () => {
      setTimeout(() => {
        setScrollY(window.scrollY);
      }, 150);
    };

    window.addEventListener("scroll", setCurrScroll);

    return () => {
      window.removeEventListener("scroll", setCurrScroll);
    };
  }, [isScrolled, isMedium]);

  useLayoutEffect(() => {
    if (isMedium) {
      return setIsScrolled(true);
    }

    if (scrollY > 190) {
      setIsScrolled(true);
    } else if (scrollY <= 190) {
      setIsScrolled(false);
    }
  }, [scrollY, isMedium]);

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
