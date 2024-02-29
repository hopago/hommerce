import { bookParentCategory } from "../../../pages/_components/constants/category";

import { FilterOptions as TFilterOptions } from "../hooks/use-filter-option";

import FilterOption from "./FilterOption";

type FilterOptionProps = {
  onClick: (option: TFilterOptions) => void;
  option: TFilterOptions;
};

export default function FilterOptions({ onClick, option }: FilterOptionProps) {
  const filterOpts: TFilterOptions[] = ["전체", ...bookParentCategory];

  return (
    <div className="seen-book-list__wrap__filter-options">
      <ul>
        {filterOpts.map((category) => (
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
