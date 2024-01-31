import { SearchSvg } from "./constants/Icons";

export default function SearchButton() {
  return (
    <button type="submit" className="search-section__container__wrapper__button">
      <SearchSvg color="#5055B1" />
    </button>
  );
}
