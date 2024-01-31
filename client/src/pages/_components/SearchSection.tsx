import SearchSelect from "./SearchSelect";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

export default function SearchSection() {
  return (
    <section className="search-section">
      <form className="search-section__container">
        <div className="search-section__container__wrapper">
          <SearchSelect />
          <SearchInput />
          <SearchButton />
        </div>
      </form>
    </section>
  );
}
