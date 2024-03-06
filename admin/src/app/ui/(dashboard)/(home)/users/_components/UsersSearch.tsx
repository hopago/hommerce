"use client";

import { useRouter } from "next/navigation";

import Button from "../../_components/Button";
import Search from "../../_components/Search";

import styles from "./users-search.module.css";

import { getCurrPathname } from "../../utils/getCurrPathname";

import { useSearchUserForm } from "../../hooks/use-search-form";

export default function UsersSearch() {
  const userId = "clerk_id";

  const router = useRouter();

  const pathname = getCurrPathname();

  if (!pathname) return null;

  const onClick = (userId: string) => {
    router.push(`/users/${userId}`);
  };

  const { searchTerm, handleChange, handleSubmit } = useSearchUserForm();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Search
          placeholder={`${pathname} 검색하기`}
          searchTerm={searchTerm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Button
          type="button"
          text="관리하기"
          onClick={() => onClick(userId)}
          className="manage"
        />
      </div>
    </div>
  );
}
