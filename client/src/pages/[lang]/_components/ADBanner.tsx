import NextIcon from "../../_components/NextIcon";
import PrevIcon from "../../_components/PrevIcon";
import ADSlider from "./ADSlider";
import ADTabInfo from "./ADTabInfo";

import { adBannerImages } from "../constants/showcase-ads";

import { useEffect, useRef, useState } from "react";

export default function ADBanner() {
  const [currIndex, setCurrIndex] = useState(1);

  const slideRef = useRef<HTMLUListElement>(null);

  const moveToNthSlide = (index: number) => {
    setTimeout(() => {
      setCurrIndex(index);
      if (slideRef.current !== null) {
        slideRef.current.style.transition = "";
      }
    }, 450);
  };

  const moveSlideByNumber = (direction: number) => {
    setCurrIndex((prev) => prev + direction);
  };

  const handleNext = () => {
    if (currIndex + 1 === adBannerImages.length + 1) {
      moveToNthSlide(1);
    }

    moveSlideByNumber(1);

    if (slideRef.current !== null) {
      slideRef.current.style.transition = "all 0.45s ease";
    }
  };

  const handlePrev = () => {
    if (currIndex - 1 === 0) {
      moveToNthSlide(adBannerImages.length);
    }

    moveSlideByNumber(-1);

    if (slideRef.current !== null) {
      slideRef.current.style.transition = "all 0.45s ease";
    }
  };

  useEffect(() => {
    if (slideRef.current !== null) {
      slideRef.current.style.transform = `translateX(-${currIndex * 1000}px)`;
    }
  }, [currIndex]);

  return (
    <div className="ad-banner">
      <PrevIcon handlePrev={handlePrev} />
      <ADSlider ref={slideRef} images={adBannerImages} />
      <NextIcon handleNext={handleNext} />
      <ADTabInfo setCurrIndex={setCurrIndex} currIndex={currIndex} />
    </div>
  );
}
