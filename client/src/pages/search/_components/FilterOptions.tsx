import { useRecoilState, useSetRecoilState } from "recoil";
import { searchFilterState } from "../../../recoil/search/search-filter";
import { searchPageEnabled } from "../../../recoil/api/search-page-enabled";

import { cn } from "../../../lib/utils";

export default function FilterOptions() {
  const filterOptions: SearchType[] = ["통합검색", "제목", "저자"];

  const [filter, setFilter] = useRecoilState(searchFilterState);
  const setEnabled = useSetRecoilState(searchPageEnabled);

  const onClick = (option: SearchType) => {
    setFilter(option);
    setEnabled(true);
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
