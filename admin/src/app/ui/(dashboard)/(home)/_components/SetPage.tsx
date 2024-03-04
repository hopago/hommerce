"use client";

import { cn } from "@/app/ui/lib/utils";

import { getPaginationWindow } from "../utils/getPaginationWindow";

import styles from "./pagination.module.css";

type SetPageProps = {
  onSetPage: (pageNumber: number) => void;
  total: number;
  currPage: number;
};

export default function SetPage({ onSetPage, total, currPage }: SetPageProps) {
  const { pages, endPage } = getPaginationWindow({ currPage, total });

  const setPageDisabled = (page: number) => currPage === page;

  return (
    <div className={styles.setPageButtonContainer}>
      {pages.map((page) => (
        <button
          key={page}
          className={cn(
            styles.setPageButton,
            page === currPage && styles.active
          )}
          onClick={() => onSetPage(page)}
          disabled={setPageDisabled(page)}
        >
          {page}
        </button>
      ))}
      {endPage < total && <span className={styles.textEclipse}>...</span>}
    </div>
  );
}
