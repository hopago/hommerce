"use client";

import { MdSearch } from "react-icons/md";

import Button from "./Button";
import Input from "./Input";
import SearchResults from "./SearchResults";

import styles from "./search.module.css";

type SearchProps = {
  placeholder: string;
  searchTerm: string;
  searchResults: [string, () => void][] | [];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
};

export default function Search({
  placeholder,
  searchTerm,
  searchResults,
  handleChange,
  handleSubmit,
}: SearchProps) {
  const onSubmit = async (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = handleSubmit();

    return res;
  };

  console.log(searchResults);

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <MdSearch />
      <Input
        type="text"
        value={searchTerm}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <Button type="submit" disabled={false} display="none" />
      {searchResults.length ? (
        <SearchResults searchResults={searchResults} />
      ) : null}
    </form>
  );
}
