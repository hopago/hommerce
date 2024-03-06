import { useState } from "react";

export const useHoverMenu = () => {
  const [show, setShow] = useState(false);

  const onMouseEnter = () => {
    setShow(true);
  };

  const onMouseLeave = () => {
    setShow(false);
  };

  return {
    show,
    onMouseEnter,
    onMouseLeave,
  };
};
