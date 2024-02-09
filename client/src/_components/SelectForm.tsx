import { useEffect, useRef, useState } from "react";

import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import SelectItems from "./SelectItems";

type SelectFromProps = {
  direction: "top" | "bottom";
  text: string;
  items: string[];
};

export default function SelectForm({
  direction,
  text,
  items,
}: SelectFromProps) {
  const selectRef = useRef<HTMLButtonElement>(null);
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
  }, [show]);

  return (
    <button className="select-form" ref={selectRef} onClick={handleClick}>
      <div className="text">
        <span>{text}</span>
        {direction === "top" ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </div>
      {show ? (
        <SelectItems ref={selectListRef} items={items} direction={direction} />
      ) : null}
    </button>
  );
}
