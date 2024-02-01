import { useEffect, useRef, useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import SelectPopOut from "./SelectPopOut";

import { selectedCartState } from "../../recoil/search";
import { useRecoilValue } from "recoil";

export default function SearchSelect() {
  const select = useRecoilValue<SearchType>(selectedCartState);

  const selectRef = useRef<HTMLDivElement>(null);
  const selectListRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
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
  }, [select, show]);

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
        <SelectPopOut ref={selectListRef} show={show} setShow={setShow} />
      ) : null}
    </>
  );
}
