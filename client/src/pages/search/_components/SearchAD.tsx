import { useEffect, useRef, useState } from "react";

import ADSlider from "../../[lang]/_components/ADSlider";
import CurrIndexInfo from "./CurrIndexInfo";

import { adBannerImages } from "../../[lang]/constants/showcase-ads";

export default function SearchAD() {
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

  useEffect(() => {
    const autoSlide = () => {
      const slideId = setTimeout(() => {
        if (currIndex + 1 > adBannerImages.length) {
          moveToNthSlide(1);
          moveSlideByNumber(1);

          if (slideRef.current !== null) {
            slideRef.current.style.transition = "all .45s ease";
          }
        } else {
          moveSlideByNumber(1);

          if (slideRef.current !== null) {
            slideRef.current.style.transition = "all .45s ease";
          }
        }
      }, 4500);

      return slideId;
    };

    const slideId = autoSlide();

    return () => {
      clearTimeout(slideId);
    };
  }, [currIndex]);

  useEffect(() => {
    if (slideRef.current !== null) {
      slideRef.current.style.transform = `translateX(-${currIndex * 1200}px)`;
    }
  }, [currIndex]);

  return (
    <div className="search-ad__container">
      <ADSlider
        ref={slideRef}
        images={adBannerImages}
        className="search-ad__container__slider"
      />
      <CurrIndexInfo
        imagesLength={adBannerImages.length}
        currIndex={currIndex}
      />
    </div>
  );
}
