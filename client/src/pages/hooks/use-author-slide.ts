import { useEffect, useState } from "react";

export const useAuthorSlide = ({ length }: { length: number }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  const handlePrev = () => {
    if (currIndex !== 0) {
      setCurrIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currIndex + 3 < length) {
      setCurrIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setPrevDisabled(false);
    setNextDisabled(false);

    if (currIndex === 0) {
      return setPrevDisabled(true);
    }
    if (currIndex + 3 === length) {
      return setNextDisabled(true);
    }
  }, [currIndex]);

  return {
    currIndex,
    prevDisabled,
    nextDisabled,
    setPrevDisabled,
    setNextDisabled,
    handleNext,
    handlePrev,
  };
};
