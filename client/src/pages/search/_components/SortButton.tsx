import { useEffect, useRef, useState } from "react";

import SelectItems from "../../../_components/SelectItems";

import { useRecoilState } from "recoil";
import { searchSortState } from "../../../recoil/search/search-page-sort";

import { MdArrowDropDown } from "react-icons/md";

export default function SortButton() {
  const items: SearchSortList = [
    "인기순",
    "최신순",
    "낮은가격순",
    "높은가격순",
    "리뷰평점순",
  ];

  const [sort, setSort] = useRecoilState(searchSortState);

  const selectRef = useRef<HTMLButtonElement>(null);
  const selectListRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (selectListRef.current?.contains(e.target as Node)) return;

    setShow((prev) => !prev);
  };

  const onSearchSortOptionClick = (item: SearchSort) => {
    setSort(item);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!selectRef.current || !selectListRef.current) return;

      if (
        !selectRef.current.contains(e.target as Node) &&
        !selectListRef.current.contains(e.target as Node)
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
    <button
      type="button"
      className="select-form"
      ref={selectRef}
      onClick={(e) => handleClick(e)}
    >
      <div className="horizontal">
        <span>{sort}</span>
        <MdArrowDropDown className="icon" />
      </div>
      {show ? (
        <SelectItems
          type="search"
          ref={selectListRef}
          items={items}
          direction="bottom"
          className="sort-box-buttons"
          setShow={setShow}
          onSearchSortOptionClick={onSearchSortOptionClick}
        />
      ) : null}
    </button>
  );
}
