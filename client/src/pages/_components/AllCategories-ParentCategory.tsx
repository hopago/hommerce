import { useState } from "react";

import { bookParentCategory } from "./constants/category";
import { cn } from "../../lib/utils";

export default function AllCategoriesParentCategory() {
  const [currCategory, setCurrCategory] =
    useState<BookParentCategory>("국내도서");

  const handleActive = (category: BookParentCategory) => {
    setCurrCategory(category);
  };

  return (
    <div className="all-categories__parent-category">
      <ul className="parent-category-list">
        {bookParentCategory.map((category) => (
          <li key={category} onClick={() => handleActive(category)}>
            <span className={cn("", currCategory === category && "active")}>
              {category}
            </span>
            {currCategory === category ? <div className="active-fill" /> : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
