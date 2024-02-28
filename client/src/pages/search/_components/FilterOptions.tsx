import { useSetRecoilState } from "recoil";
import { searchFilterState } from "../../../recoil/search-filter";

export default function FilterOptions() {
  const filterOptions: FilterOptions = [
    "통합검색",
    "상품명",
    "저자/역자",
    "출판사",
  ];

  const setFilter = useSetRecoilState(searchFilterState);

  const onClick = (option: SearchFilter) => {
    setFilter(option);
  };

  return (
    <div className="search-contents__filter__wrapper__options">
      <ul>
        {filterOptions.map((opt) => (
          <li key={opt}>
            <button onClick={() => onClick(opt)}>{opt}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
