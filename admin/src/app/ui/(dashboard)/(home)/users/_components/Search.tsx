"use client";

import { MdSearch } from "react-icons/md";

import styles from "./search.module.css";

import Input from "../../_components/Input";
import SearchResultList from "./SearchResultList";

import { IUser } from "../../types/user";

import { cn } from "@/app/ui/lib/utils";
import { checkValidResponse } from "../../utils/checkValidResponse";

import { INPUT_CLASS } from "../../constants/classNames";

type SearchProps = {
  placeholder: string;
  searchTerm: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchResults: IUser[] | null;
  isLoading: boolean;
  error: Error | null;
};

export default function Search({
  placeholder,
  searchTerm,
  searchResults,
  handleChange,
  isLoading,
  error,
}: SearchProps) {
  const hasError = error;
  const isLoadingOrNoResults =
    isLoading || (Array.isArray(searchResults) && !searchResults.length);
  const isValidResponse = checkValidResponse(searchResults);

  return (
    <div
      className={cn(
        styles.container,
        hasError && styles.error,
        (isLoadingOrNoResults || isValidResponse) && styles.active
      )}
    >
      <MdSearch />
      <Input
        type="text"
        value={searchTerm}
        placeholder={placeholder}
        onChange={handleChange}
        className={INPUT_CLASS.USER_SEARCH_INPUT}
      />
      <SearchResultList search={searchResults!} isLoading={isLoading} />
    </div>
  );
}
