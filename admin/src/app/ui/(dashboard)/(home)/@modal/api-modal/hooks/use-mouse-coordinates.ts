import { useCallback, useState } from "react";

export const useMouseCoordinates = () => {
  const [show, setShow] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseEnter = useCallback(() => {
    setShow(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setShow(false);
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setMousePosition({
      x: mouseX,
      y: mouseY,
    });
  }, []);

  return {
    show,
    mousePosition,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
  };
};
