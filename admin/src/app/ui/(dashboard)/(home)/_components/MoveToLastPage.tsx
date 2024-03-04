"use client"

import styles from "./pagination.module.css";

type MoveToLastPageProps = {
  handleMoveToLastPage: (pageTotal: number) => void;
  pageTotal: number;
};

export default function MoveToLastPage({
  handleMoveToLastPage,
  pageTotal,
}: MoveToLastPageProps) {
  return (
    <button
      type="button"
      className={styles.lastPageButton}
      onClick={() => handleMoveToLastPage(pageTotal)}
    >
      <span>{pageTotal}</span>
    </button>
  );
}
