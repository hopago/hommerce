import { useEffect, useRef, useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import SelectPopOut from "./SelectPopOut";
import { selectedCartState } from "../../recoil/search";
import { useRecoilValue } from "recoil";

export default function SearchSelect() {
  const select = useRecoilValue<SearchType>(selectedCartState);

  const selectRef = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState(false);
  const [initialSelect, _] = useState(select);

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  useEffect(() => {
    if (select !== initialSelect) {
      setShow(false);
    }
  }, [select, initialSelect]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !(event.target as Element).closest(
          ".search-section__container__wrapper__select"
        )
      )
        return;

      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      {show ? <SelectPopOut /> : null}
    </>
  );
}
