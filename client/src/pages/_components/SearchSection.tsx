import SearchSelect from "./SearchSelect";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

import { useSearchForm } from "../hooks/use-search-form";

export default function SearchSection() {
  const { onSubmit, onChange, searchTerm } = useSearchForm();

  return (
    <section className="search-section">
      <form onSubmit={onSubmit} className="search-section__container">
        <div className="search-section__container__wrapper">
          <SearchSelect />
          <SearchInput onChange={onChange} searchTerm={searchTerm} />
          <SearchButton />
        </div>
      </form>
    </section>
  );
}
