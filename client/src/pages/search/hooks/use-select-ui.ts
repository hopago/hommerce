import { useState } from "react";

export type UIType = "grid" | "flex";

export const useSelectUI = () => {
  const [display, setDisplay] = useState<UIType>("flex");

  const onClick = (display: UIType) => {
    setDisplay(display);
  };

  return {
    display,
    onClick,
  };
};
