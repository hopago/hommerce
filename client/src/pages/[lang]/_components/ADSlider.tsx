import { forwardRef, useEffect, useState } from "react";

type ADSliderProps = {
  images: string[];
};

const ADSlider = forwardRef<HTMLUListElement, ADSliderProps>(
  ({ images }, ref) => {
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
      <div className="ad-banner__container">
        <ul className="ad-banner__container__horizontal" ref={ref}>
          {currList?.map((image, i) => (
            <li key={(image += i)}>
              <img src={image} alt="ad-banner" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default ADSlider;
