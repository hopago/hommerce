import { useEffect, useRef, useState } from "react";

export const useScrollRef = ({ currentPage }: { currentPage: number }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentPage]);

  return {
    scrollRef,
  };
};
