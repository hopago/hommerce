import { Viewport } from "next";

import { MdArrowDropDown } from "react-icons/md";

import styles from "./select-list.module.css";

import SelectItem from "./SelectItem";

import { cn } from "@/app/ui/lib/utils";

import { SELECT_CLASS } from "../constants/classNames";

import { useEffect, useRef } from "react";

import { LogTabList } from "../users/management/[username]/types/log-tab-list";
import { SortOption } from "../users/management/[username]/_components/ReviewControlPanel";
import { PointFilterOption } from "../users/management/[username]/_components/FilterPointLogs";
import { BookFilterOption } from "../books/_components/FilterBooks";

// 사용시 타입 추가

type SelectListProps = {
  selectList:
    | LogTabList[]
    | FilterOptions
    | SortOption[]
    | PointFilterOption[]
    | BookFilterOption[]
    | BookSubCategoryList;
  currSelect:
    | LogTabList
    | FilterOption
    | SortOption
    | PointFilterOption
    | BookFilterOption
    | BookSubCategory
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
        className === SELECT_CLASS.POST_LOGS_SELECT && styles.postLogs,
        className === SELECT_CLASS.FILTER_REVIEW_SELECT && styles.filterReview,
        className === SELECT_CLASS.REVIEW_SORT_SELECT && styles.reviewSort,
        className === SELECT_CLASS.BOOK_EDIT && styles.bookEdit,
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
