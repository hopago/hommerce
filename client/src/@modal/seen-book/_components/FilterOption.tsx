import { cn } from "../../../lib/utils";

import { FilterOptions } from "../hooks/use-filter-option";

type FilterOptionProps = {
  category: FilterOptions;
  onClick: (option: FilterOptions) => void;
  option: FilterOptions;
};

export default function FilterOption({
  category,
  onClick,
  option,
}: FilterOptionProps) {
  return (
    <li
      className={cn("", option === category && "active")}
      onClick={() => onClick(category)}
    >
      <span>{category}</span>
    </li>
  );
}
