import { forwardRef } from "react";

import { cn } from "../lib/utils";

import { ReviewSortOptions } from "../recoil/review-select";

type SelectItemsProps = {
  items: string[];
  direction: "top" | "bottom";
  className?: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  onReviewSortOptionClick?: (text: ReviewSortOptions) => void;
};

const SelectItems = forwardRef<HTMLDivElement, SelectItemsProps>(
  (
    {
      items,
      direction,
      className,
      onReviewSortOptionClick,
      setShow,
    }: SelectItemsProps,
    ref
  ) => {
    const handleListItemClick = (item: unknown) => {
      if (typeof onReviewSortOptionClick === "function") {
        const validString: ReviewSortOptions[] = ["좋아요 순", "최신 순"];

        if (validString.find((string) => string === item)) {
          onReviewSortOptionClick(item as ReviewSortOptions);
        }
      }
      setShow(false);
    };

    return (
      <div
        ref={ref}
        className={cn(
          "select-items",
          direction === "top"
            ? "top fade-in-closeUp"
            : "bottom fade-in-dropdown",
          className && `${className}`
        )}
      >
        <div className="select-items__wrap">
          <ol>
            {items.map((item) => (
              <li key={item} onClick={() => handleListItemClick(item)}>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
);

export default SelectItems;
