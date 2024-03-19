"use client";

import { useRef } from "react";

import SelectList from "../../../_components/SelectList";
import { BookFilterOption } from "../../_components/FilterBooks";
import Input from "../../../_components/Input";

import styles from "./book-search-input.module.css";

import { useFilter } from "../../../hooks/use-filter";
import { useSearchBookForm } from "../../../hooks/use-search-form";
import { creatorFilterBooks } from "@/app/store/use-filter";
import { useOutsideClick } from "../../../users/hooks/use-outside-click";

import { INPUT_CLASS, SELECT_CLASS } from "../../../constants/classNames";
import SearchResultList from "./SearchResultList";

import { cn } from "@/app/ui/lib/utils";
import { checkValidResponse } from "../../../utils/checkValidResponse";

import { MdSearch } from "react-icons/md";

const filterOptions: BookFilterOption[] = ["통합검색", "제목", "저자"];

export default function BookSearchInput() {
  const props = creatorFilterBooks();

  const { show, toggleShow, filter, setFilter, setShow } =
    useFilter<BookFilterOption>(props);

  const {
    searchTerm,
    setSearchTerm,
    handleChange,
    isLoading,
    searchResults,
    error,
  } = useSearchBookForm({ filter });

  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick({ ref: containerRef, setSearchTerm });

  const hasError = error;
  const isLoadingOrNoResults =
    isLoading || (Array.isArray(searchResults) && !searchResults.length);
  const isValidResponse = checkValidResponse(searchResults);

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <SelectList
          selectList={filterOptions}
          currSelect={filter}
          handleItemClick={setFilter}
          className={SELECT_CLASS.FILTER_REVIEW_SELECT}
          show={show}
          setShow={setShow}
          handleShow={toggleShow}
          backgroundColor="#414B5D"
        />
        <div
          className={cn(
            styles.inputContainer,
            hasError && styles.error,
            (isLoadingOrNoResults || isValidResponse) && styles.active
          )}
          ref={containerRef}
        >
          <MdSearch />
          <Input
            type="text"
            value={searchTerm}
            placeholder="검색어를 입력해주세요."
            onChange={handleChange}
            className={INPUT_CLASS.USER_SEARCH_INPUT}
          />
          <SearchResultList isLoading={isLoading} search={searchResults!} />
        </div>
      </div>
    </div>
  );
}
