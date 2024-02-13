import { cn } from "../lib/utils";

type FilterOptionProps = {
  category: BookParentCategory;
  onClick: (option: BookParentCategory) => void;
  option: BookParentCategory | "전체";
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
