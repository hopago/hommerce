import { useRef } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

import SelectPopOut from "./SelectPopOut";

import { useRecoilValue } from "recoil";
import { searchFilterState } from "../../recoil/search/search-filter";

import { useSelectMenu } from "../hooks/use-select-menu";

export default function SearchSelect({ className }: { className?: string }) {
  const select = useRecoilValue<SearchType>(searchFilterState);

  const selectRef = useRef<HTMLDivElement>(null);
  const selectListRef = useRef<HTMLDivElement>(null);

  const { handleClick, show, setShow } = useSelectMenu({
    select,
    selectRef,
    selectListRef,
  });

  return (
    <>
      <div
        className="search-section__container__wrapper__select"
        ref={selectRef}
        onClick={handleClick}
      >
        <span className="text">{select}</span>
        <MdKeyboardArrowDown className="icon" />
      </div>
      {show ? (
        <SelectPopOut
          animationName="fade-in-dropdown"
          className={className}
          ref={selectListRef}
          show={show}
          setShow={setShow}
        />
      ) : null}
    </>
  );
}
