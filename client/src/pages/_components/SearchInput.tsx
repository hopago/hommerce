type SearchInputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchTerm?: string;
};

export default function SearchInput({
  onChange,
  searchTerm,
}: SearchInputProps) {
  return (
    <div className="search-section__container__wrapper__input">
      <input
        name="searchTerm"
        type="text"
        onChange={onChange}
        value={searchTerm}
        autoComplete="off"
      />
    </div>
  );
}
