import { useEffect, useRef, useState } from "react";
import ADSlider from "../../[lang]/_components/ADSlider";
import { adBannerImages } from "../../[lang]/constants/showcase-ads";

export default function SearchAD() {
  const [currIndex, setCurrIndex] = useState(1);

  const slideRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const autoSlide = () => {
      const slideId = setTimeout(() => {
        if (currIndex + 1 === adBannerImages.length + 1) {
          return setCurrIndex(1);
        }

        if (currIndex - 1 === 0) {
          return setCurrIndex(adBannerImages.length);
        }

        setCurrIndex((prev) => prev + 1);
      }, 3000);

      return slideId;
    };

    const slideId = autoSlide();

    return () => {
      clearTimeout(slideId);
    };
  }, []);

  useEffect(() => {
    if (slideRef.current !== null) {
      slideRef.current.style.transform = `translateX(-${currIndex * 1024}px)`;
    }
  }, [currIndex]);

  return (
    <div className="search-ad__container">
      <ADSlider
        ref={slideRef}
        images={adBannerImages}
        className="search-ad__container__slider"
      />
    </div>
  );
}
