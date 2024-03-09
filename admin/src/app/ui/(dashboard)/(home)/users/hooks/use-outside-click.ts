import { Dispatch, SetStateAction, useEffect } from "react";

type UserOutsideClickParams<T extends HTMLElement> = {
  ref: React.RefObject<T>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export const useOutsideClick = <T extends HTMLElement>({
  ref,
  setSearchTerm,
}: UserOutsideClickParams<T>) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current) return;

      if (!ref.current.contains(e.target as Node)) {
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
};
