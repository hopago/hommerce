"use client"

import { cn } from "@/app/ui/lib/utils";

import { MdArrowRight } from "react-icons/md";

import styles from "./pagination.module.css";

type NextPageProps = {
  onNextPage: (pageTotal: number) => void;
  disabled: boolean;
  pageTotal: number;
};

export default function NextPage({
  onNextPage,
  disabled,
  pageTotal,
}: NextPageProps) {
  return (
    <button
      type="button"
      className={cn(styles.nextPageButton, disabled && "disabled")}
      onClick={() => onNextPage(pageTotal)}
      disabled={disabled}
    >
      <MdArrowRight className="icon" />
    </button>
  );
}
