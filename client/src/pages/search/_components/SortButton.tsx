import { useRef } from "react";

import SelectItems from "../../../_components/SelectItems";

import { useRecoilState, useSetRecoilState } from "recoil";
import { searchSortState } from "../../../recoil/search/search-page-sort";
import { searchPageEnabled } from "../../../recoil/api/search-page-enabled";

import { useSelectMenu } from "../../hooks/use-select-menu";

import { MdArrowDropDown } from "react-icons/md";

const items: SearchSortList = [
  "인기순",
  "최신순",
  "낮은가격순",
  "높은가격순",
  "리뷰평점순",
];

export default function SortButton() {
  const setEnabled = useSetRecoilState(searchPageEnabled);

  const [sort, setSort] = useRecoilState(searchSortState);

  const selectRef = useRef<HTMLButtonElement>(null);
  const selectListRef = useRef<HTMLDivElement>(null);

  const { show, setShow } = useSelectMenu({
    selectRef,
    selectListRef,
    select: sort,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (selectListRef.current?.contains(e.target as Node)) return;

    setShow((prev) => !prev);
  };

  const onSearchSortOptionClick = (item: SearchSort) => {
    setSort(item);
    setEnabled(true);
  };

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
