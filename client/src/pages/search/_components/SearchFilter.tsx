import FilterHeading from "./FilterHeading";
import FilterOptions from "./FilterOptions";

export default function SearchFilter() {
  return (
    <div className="search-contents__filter">
      <div className="search-contents__filter__wrapper">
        <FilterHeading />
        <FilterOptions />
      </div>
    </div>
  );
}
