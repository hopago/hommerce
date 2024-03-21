import { useEffect, useState } from "react";

type UseSelectRefProps = {
  selectRef: React.RefObject<HTMLDivElement | HTMLButtonElement>;
  selectListRef: React.RefObject<HTMLDivElement | HTMLButtonElement>;
  select: SearchType | SearchSort;
};

export const useSelectMenu = ({
  selectRef,
  selectListRef,
  select,
}: UseSelectRefProps) => {
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

  return {
    show,
    setShow,
    handleClick,
  };
};
