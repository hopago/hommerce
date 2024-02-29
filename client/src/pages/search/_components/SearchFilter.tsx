import FilterHeading from "./FilterHeading";
import FilterOptions from "./FilterOptions";

export default function SearchFilter() {
  return (
    <div className="search-contents__filter">
      <FilterHeading />
      <FilterOptions />
    </div>
  );
}
