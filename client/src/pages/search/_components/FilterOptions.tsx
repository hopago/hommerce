import { useRecoilState } from "recoil";

import { searchFilterState } from "../../../recoil/search-filter";

import { cn } from "../../../lib/utils";

export default function FilterOptions() {
  const filterOptions: FilterOptions = [
    "통합검색",
    "상품명",
    "저자/역자",
    "출판사",
  ];

  const [filter, setFilter] = useRecoilState(searchFilterState);

  const onClick = (option: SearchFilter) => {
    setFilter(option);
  };

  return (
    <div className="search-contents__filter__options">
      <ul>
        {filterOptions.map((opt) => (
          <li key={opt}>
            <button
              className={cn("", opt === filter && "active")}
              onClick={() => onClick(opt)}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
