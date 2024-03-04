"use client"

import styles from "./pagination.module.css";

type MoveToFirstPageProps = {
  handleMoveToFirstPage: () => void;
};

export default function MoveToFirstPage({
  handleMoveToFirstPage,
}: MoveToFirstPageProps) {
  return (
    <button
      className={styles.firstPageButton}
      onClick={handleMoveToFirstPage}
      type="button"
    >
      <span>1</span>
    </button>
  );
}
