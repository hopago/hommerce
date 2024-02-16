import { useSearchForm } from "../hooks/use-search-form";

import SearchBar from "./SearchBar";
import FixedSearchBar from "./FixedSearchBar";

import { useLayoutEffect, useState } from "react";

import { useMediaQuery } from "usehooks-ts";

import { useParams } from "react-router-dom";

export default function SearchSection() {
  const params = useParams();
  const { bookId } = params;

  const { onSubmit, onChange, searchTerm } = useSearchForm();

  const isMedium = useMediaQuery("(max-width:740px)");
  const DETAILS_VIEW_SCROLL_THRESHOLD = 1146;
  const FIXED_SEARCH_SCROLL_THRESHOLD = 190;

  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDetailsPage] = useState(Boolean(bookId));

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
  }, [isMedium]);

  useLayoutEffect(() => {
    if (isDetailsPage) {
      setIsScrolled(
        scrollY > FIXED_SEARCH_SCROLL_THRESHOLD &&
          scrollY <= DETAILS_VIEW_SCROLL_THRESHOLD
      );
    }

    if (!isDetailsPage) {
      if (scrollY > FIXED_SEARCH_SCROLL_THRESHOLD) {
        setIsScrolled(true);
      } else if (scrollY <= FIXED_SEARCH_SCROLL_THRESHOLD) {
        setIsScrolled(false);
      }
    }
  }, [scrollY, isMedium, isDetailsPage]);

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
