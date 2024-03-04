"use client";

import { useRouter } from "next/navigation";

import Button from "../../_components/Button";
import Search from "../../_components/Search";

import styles from "./users-search.module.css";

import useSearchForm from "../../hooks/use-search-form";

import { getCurrPathname } from "../../utils/getCurrPathname";

export default function UsersSearch() {
  const router = useRouter();

  const pathname = getCurrPathname();

  if (!pathname) return null;

  const onClick = () => {
    router.push("/users/management");
  };

  const { searchTerm, handleChange, handleSubmit } = useSearchForm({
    type: pathname,
  });

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
          onClick={onClick}
          className="manage"
        />
      </div>
    </div>
  );
}
