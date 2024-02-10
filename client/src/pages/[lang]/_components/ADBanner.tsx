import NextIcon from "../../_components/NextIcon";
import PrevIcon from "../../_components/PrevIcon";
import ADSlider from "./ADSlider";

import { adBannerImages } from "../constants/showcase-ads";

import { useEffect, useRef, useState } from "react";

export default function ADBanner() {
  const [currIndex, setCurrIndex] = useState(0);

  const slideRef = useRef<HTMLUListElement>(null);

  const moveToNthSlide = (index: number) => {
    setTimeout(() => {
      setCurrIndex(index);
      if (slideRef.current !== null) {
        slideRef.current.style.transition = "";
      }
    }, 300);
  };

  const moveSlideByNumber = (direction: number) => {
    setCurrIndex((prev) => prev + direction);
  };

  const handleNext = () => {
    if (currIndex === adBannerImages.length + 1) {
      moveToNthSlide(1);
    }

    moveSlideByNumber(1);
  };

  const handlePrev = () => {
    if (currIndex === 0) {
      moveToNthSlide(adBannerImages.length);
    }

    moveSlideByNumber(-1);
  };

  useEffect(() => {
    if (slideRef.current !== null) {
      slideRef.current.style.transition = "all 0.3s ease";
      slideRef.current.style.transform = `translateX(-${currIndex}00%)`;
    }
  }, [currIndex]);

  return (
    <div className="ad-banner">
      <PrevIcon handlePrev={handlePrev} />
      <ADSlider ref={slideRef} images={adBannerImages} />
      <NextIcon handleNext={handleNext} />
    </div>
  );
}
