import { Dispatch, SetStateAction, useEffect } from "react";

type UserOutsideClickParams<T extends HTMLElement> = {
  ref: React.RefObject<T>;
  setShow?: Dispatch<SetStateAction<boolean>> | undefined;
  setSearchTerm?: Dispatch<SetStateAction<string>> | undefined;
};

export const useOutsideClick = <T extends HTMLElement>({
  ref,
  setShow,
  setSearchTerm,
}: UserOutsideClickParams<T>) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current) return;

      if (!ref.current.contains(e.target as Node)) {
        setShow && setShow(false);
        setSearchTerm && setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
};
