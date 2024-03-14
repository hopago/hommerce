"use client";

import { useRouter } from "next/navigation";

import { useEffect, useRef } from "react";

import Button from "../../_components/Button";
import Search from "./Search";
import SelectedUserList from "./SelectedUserList";

import styles from "./users-search.module.css";

import { getCurrPathname } from "../../utils/getCurrPathname";

import { useFilterResults } from "../hooks/use-filter-results";
import { useSearchUserForm } from "../../hooks/use-search-form";
import { useManageUsers } from "@/app/store/use-manage-users";
import { useOutsideClick } from "../hooks/use-outside-click";

import { toast } from "sonner";

import { BUTTON_CLASS } from "../../constants/classNames";

export default function UsersSearch() {
  const containerRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const pathname = getCurrPathname();
  if (!pathname) return null;

  const onClick = () => {
    router.push(`/users/management`);
  };

  const {
    searchTerm,
    setSearchTerm,
    handleChange,
    isLoading,
    searchResults,
    error,
  } = useSearchUserForm();

  const { usernames, errMsg, error: manageError } = useManageUsers();

  const filteredResults = useFilterResults({
    searchResults,
    usernames,
    searchTerm,
  });

  useOutsideClick({ ref: containerRef, setSearchTerm });

  useEffect(() => {
    if (manageError && errMsg) {
      toast.error(errMsg);
    }
  }, [manageError, errMsg]);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.wrapper}>
        <Search
          placeholder={`${pathname} 검색하기`}
          searchTerm={searchTerm}
          handleChange={handleChange}
          searchResults={filteredResults}
          isLoading={isLoading}
          error={error}
        />
        {usernames && <SelectedUserList usernames={usernames} />}
        <Button
          type="button"
          text="관리하기"
          onClick={onClick}
          className={BUTTON_CLASS.MANAGE}
          disabled={!usernames}
        />
      </div>
    </div>
  );
}
