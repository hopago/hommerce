import { NavLinks } from ".";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import SearchSelect from "./SearchSelect";

type SearchBarProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
};

export default function SearchBar({
  onSubmit,
  onChange,
  searchTerm,
}: SearchBarProps) {
  return (
    <section className="search-section">
      <form onSubmit={onSubmit} className="search-section__container">
        <div className="search-section__container__wrapper">
          <SearchSelect className="fixed" />
          <SearchInput onChange={onChange} searchTerm={searchTerm} />
          <SearchButton />
        </div>
      </form>
      <NavLinks />
    </section>
  );
}