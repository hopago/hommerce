import { MdArrowDropDown } from "react-icons/md";

import styles from "./select-list.module.css";

import SelectItem from "./SelectItem";

import { cn } from "@/app/ui/lib/utils";

import { POST_LOGS_SELECT } from "../constants/classNames";

import { useEffect, useRef } from "react";

import { LogTabList } from "../users/management/[username]/types/log-tab-list";

// 사용시 타입 추가

type SelectListProps = {
  selectList: LogTabList[];
  currSelect: LogTabList;
  handleItemClick: (tab: LogTabList) => void;
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  handleShow: () => void;
  className?: string;
};

export default function SelectList({
  currSelect,
  handleItemClick,
  selectList,
  show,
  setShow,
  handleShow,
  className,
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
        className === POST_LOGS_SELECT && styles.postLogs
      )}
    >
      <button
        className={styles.selectWrap}
        ref={selectListRef}
        onClick={handleShow}
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
