import { forwardRef } from "react";

import { cn } from "../lib/utils";

import { ReviewSortOptions } from "../recoil/review-select";

type SelectItemsProps = {
  type: "review" | "search";
  items: string[];
  direction: "top" | "bottom";
  className?: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  onReviewSortOptionClick?: (text: ReviewSortOptions) => void;
  onSearchSortOptionClick?: (option: SearchSort) => void;
};

const SelectItems = forwardRef<HTMLDivElement, SelectItemsProps>(
  (
    {
      type,
      items,
      direction,
      className,
      setShow,
      onReviewSortOptionClick,
      onSearchSortOptionClick,
    }: SelectItemsProps,
    ref
  ) => {
    const handleReviewSortOptionClick = (item: unknown) => {
      const validString: ReviewSortOptions[] = ["좋아요 순", "최신 순"];

      if (validString.includes(item as ReviewSortOptions)) {
        onReviewSortOptionClick &&
          onReviewSortOptionClick(item as ReviewSortOptions);
      }
    };

    const handleSearchSortOptionClick = (item: unknown) => {
      const validItem: SearchSort[] = [
        "인기순",
        "최신순",
        "낮은가격순",
        "높은가격순",
        "리뷰평점순",
      ];

      if (validItem.includes(item as SearchSort)) {
        onSearchSortOptionClick && onSearchSortOptionClick(item as SearchSort);
      }
    };

    const handleListItemClick = (item: unknown) => {
      if (type === "review") {
        handleReviewSortOptionClick(item);
      }
      if (type === "search") {
        handleSearchSortOptionClick(item);
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
