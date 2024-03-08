"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import Button from "../../_components/Button";
import Search from "./Search";
import SelectedUserList from "./SelectedUserList";

import styles from "./users-search.module.css";

import { getCurrPathname } from "../../utils/getCurrPathname";

import { useFilterResults } from "../hooks/use-filter-results";
import { useSearchUserForm } from "../../hooks/use-search-form";
import { useManageUsers } from "@/app/store/use-manage-users";

import { toast } from "sonner";
import { MANAGE_BUTTON } from "../../constants/classNames";

export default function UsersSearch() {
  const router = useRouter();

  const pathname = getCurrPathname();
  if (!pathname) return null;

  const onClick = () => {
    router.push(`/users/management`);
  };

  const { searchTerm, handleChange, isLoading, searchResults, error } =
    useSearchUserForm({
      onError: (message: string) => {
        toast.error(message);
      },
    });

  const { usernames, errMsg, error: manageError } = useManageUsers();

  const filteredResults = useFilterResults({
    searchResults,
    usernames,
    searchTerm,
  });

  useEffect(() => {
    if (manageError && errMsg) {
      toast.error(errMsg);
    }
  }, [manageError, errMsg]);

  return (
    <div className={styles.container}>
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
          className={MANAGE_BUTTON}
          disabled={!usernames}
        />
      </div>
    </div>
  );
}
