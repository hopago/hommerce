import { useState } from "react";
import { cn } from "../../lib/utils";

type InfoTitleProps = {
  title: HeadingCategory | string;
  category?: BookParentCategoryList;
  className?: string;
};

export default function InfoTitle({
  title,
  category: categoryArr,
  className,
}: InfoTitleProps) {
  let category: JSX.Element | null = null;

  const [currCategory, setCurrCategory] =
    useState<BookParentCategory>("국내도서");

  if (categoryArr) {
    category = (
      <ul className="recommend-books__today-pick__info__wrapper__category-list">
        {categoryArr.map((c) => (
          <li key={c}>
            <div className={cn("", currCategory === c && "active")} />
            <span className={cn("", currCategory === c && "text-active")}>
              {c}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div
      className={cn(
        "recommend-books__today-pick__info",
        className && className
      )}
    >
      <div className="recommend-books__today-pick__info__wrapper">
        <h1>{title}</h1>
        {category}
      </div>
    </div>
  );
}
