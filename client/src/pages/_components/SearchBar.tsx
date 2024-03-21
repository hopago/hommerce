import { useMediaQuery } from "usehooks-ts";
import { NavLinks } from ".";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import SearchSelect from "./SearchSelect";

type SearchBarProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
  isScrolled: boolean;
};

export default function SearchBar({
  onSubmit,
  onChange,
  searchTerm,
  isScrolled
}: SearchBarProps) {
  const isMedium = useMediaQuery("(max-width:740px)");

  return (
    <section className="search-section">
      {!isMedium && (
        <form onSubmit={onSubmit} className="search-section__container">
          <div className="search-section__container__wrapper">
            <SearchSelect className="home" />
            <SearchInput onChange={onChange} searchTerm={searchTerm} />
            <SearchButton />
          </div>
        </form>
      )}
      <NavLinks isScrolled={isScrolled} />
    </section>
  );
}
