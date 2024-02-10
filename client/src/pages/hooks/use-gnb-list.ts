import { useState } from "react";

export const useGNBList = () => {
  const [show, setShow] = useState(false);

  const onMouseEnter = () => {
    setShow(true);
  };

  const onMouseLeave = (
    e: React.MouseEvent<HTMLElement>,
    className: string
  ) => {
    if (!(e.target as HTMLElement).closest(`.${className}`)) return;

    setShow(false);
  };

  return {
    show,
    onMouseEnter,
    onMouseLeave,
  };
};
