"use client";

import { MdArrowLeft } from "react-icons/md";

import { cn } from "@/app/ui/lib/utils";

import styles from "./pagination.module.css";

type PrevPageProps = {
  onPrevPage: () => void;
  disabled: boolean;
};

export default function PrevPage({ onPrevPage, disabled }: PrevPageProps) {
  return (
    <button
      type="button"
      className={cn(styles.prevPageButton, disabled && styles.disabled)}
      onClick={onPrevPage}
      disabled={disabled}
    >
      <MdArrowLeft className={styles.arrowIcon} size={21} />
    </button>
  );
}
