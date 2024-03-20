import { useState } from "react";

import { useOutsideClick } from "../../../users/hooks/use-outside-click";

type UseContextMenuProps = {
  ref: React.RefObject<HTMLDivElement>;
};

export const useContextMenu = ({ ref }: UseContextMenuProps) => {
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useOutsideClick({ ref, setShow });

  const onContextMenu = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();

    setPosition({ x: e.clientX, y: e.clientY });
    setShow(true);
  };

  return {
    show,
    onContextMenu,
    position,
    setShow,
  };
};
