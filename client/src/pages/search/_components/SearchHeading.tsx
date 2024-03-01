type SearchHeadingProps = {
  searchTerm: string;
  docsLength: number;
};

export default function SearchHeading({
  searchTerm,
  docsLength,
}: SearchHeadingProps) {
  return (
    <div className="search-heading">
      <h1>
        <span>' {searchTerm} '</span> 에 대한 {docsLength.toLocaleString()}
        개의 검색 결과
      </h1>
    </div>
  );
}
