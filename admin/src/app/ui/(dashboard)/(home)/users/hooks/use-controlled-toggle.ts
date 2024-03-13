import { RefObject, useState } from "react";

import { useOutsideClick } from "./use-outside-click";

export const useToggle = <T extends HTMLElement>(ref: RefObject<T>) => {
  const [show, setShow] = useState(false);

  const toggleClick = () => setShow((prev) => !prev);

  useOutsideClick({ ref, setShow });

  return {
    show,
    setShow,
    toggleClick,
  };
};
