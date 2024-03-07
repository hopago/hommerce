"use client";

import { MdSearch } from "react-icons/md";

import styles from "./search.module.css";

import Button from "../../_components/Button";
import Input from "../../_components/Input";
import { IUser } from "../../types/user";

type SearchProps = {
  placeholder: string;
  searchTerm: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchResults: IUser[] | undefined;
};

export default function Search({
  placeholder,
  searchTerm,
  searchResults,
  handleChange,
}: SearchProps) {
  console.log(searchResults);

  return (
    <form className={styles.container} onSubmit={(e) => e.preventDefault()}>
      <MdSearch />
      <Input
        type="text"
        value={searchTerm}
        placeholder={placeholder}
        onChange={handleChange}
      />
      <Button type="submit" disabled={false} display="none" />
    </form>
  );
}
