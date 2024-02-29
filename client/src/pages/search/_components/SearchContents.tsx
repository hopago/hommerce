import Books from "./Books";
import FilterInfo from "./FilterInfo";
import SortBox from "./SortBox";

export default function SearchContents() {
  return (
    <div className="search-contents__container">
      <SortBox />
      <FilterInfo />
      <Books />
    </div>
  );
}
