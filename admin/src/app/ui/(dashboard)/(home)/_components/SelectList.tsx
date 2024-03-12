import { Viewport } from "next";

import { MdArrowDropDown } from "react-icons/md";

import styles from "./select-list.module.css";

import SelectItem from "./SelectItem";

import { cn } from "@/app/ui/lib/utils";

import {
  FILTER_REVIEW_SELECT,
  POST_LOGS_SELECT,
  REVIEW_SORT_SELECT,
} from "../constants/classNames";

import { useEffect, useRef } from "react";

import { LogTabList } from "../users/management/[username]/types/log-tab-list";
import { SortOption } from "../users/management/[username]/_components/ReviewControlPanel";

// 사용시 타입 추가

type SelectListProps = {
  selectList: LogTabList[] | FilterOptions | SortOption[];
  currSelect: LogTabList | FilterOption | SortOption;
  handleItemClick: (param: any) => void;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleShow: () => void;
  className?: string;
  backgroundColor?: string;
};

export const viewPort: Viewport = {
  themeColor: "#414B5D",
};

export default function SelectList({
  currSelect,
  handleItemClick,
  selectList,
  show,
  setShow,
  handleShow,
  className,
  backgroundColor,
}: SelectListProps) {
  const selectListRef = useRef<HTMLButtonElement>(null);
  const selectItemRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!selectListRef.current || !selectItemRef.current) return;

      if (
        !selectListRef.current.contains(e.target as Node) &&
        !selectItemRef.current.contains(e.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <div
      className={cn(
        styles.select,
        className === POST_LOGS_SELECT && styles.postLogs,
        className === FILTER_REVIEW_SELECT && styles.filterReview,
        className === REVIEW_SORT_SELECT && styles.reviewSort
      )}
    >
      <button
        type="button"
        className={styles.selectWrap}
        ref={selectListRef}
        onClick={handleShow}
        style={{ backgroundColor: `${backgroundColor}` }}
      >
        <div className={styles.textWrap}>
          <span>{currSelect}</span>
          <MdArrowDropDown size={21} />
        </div>
      </button>
      {show && (
        <SelectItem
          currSelect={currSelect}
          selectList={selectList}
          handleItemClick={handleItemClick!}
          className={className}
          ref={selectItemRef}
        />
      )}
    </div>
  );
}
