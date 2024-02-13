import { bookParentCategory } from "../pages/_components/constants/category";

import FilterOption from "./FilterOption";

type FilterOptionProps = {
  onClick: (option: BookParentCategory) => void;
  option: BookParentCategory | "전체";
};

export default function FilterOptions({ onClick, option }: FilterOptionProps) {
  return (
    <div className="seen-book-list__wrapper__filter-options">
      <ul>
        {bookParentCategory.map((category) => (
          <FilterOption
            key={category}
            option={option}
            onClick={onClick}
            category={category}
          />
        ))}
      </ul>
    </div>
  );
}
