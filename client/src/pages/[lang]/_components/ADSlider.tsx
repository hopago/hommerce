import { forwardRef, useEffect, useState } from "react";
import { cn } from "../../../lib/utils";

type ADSliderProps = {
  images: string[];
  className?: "search-ad__container__slider";
};

const ADSlider = forwardRef<HTMLUListElement, ADSliderProps>(
  ({ images, className }, ref) => {
    const [currList, setCurrList] = useState<string[]>();

    useEffect(() => {
      if (images.length) {
        const startItem = images[0];
        const lastItem = images[images.length - 1];
        const newList = [lastItem, ...images, startItem];

        setCurrList(newList);
      }
    }, [images]);

    return (
      <div className={cn("ad-banner__container", className && className)}>
        <ul
          className={cn(
            "ad-banner__container__horizontal",
            className && className
          )}
          ref={ref}
        >
          {currList?.map((image, i) => (
            <li key={`${image}-${i}`}>
              <img src={image} alt="ad-banner" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default ADSlider;
