type SearchHeadingProps = {
  searchTerm: string;
};

export default function SearchHeading({ searchTerm }: SearchHeadingProps) {
  const temporaryLength: number = 104903; // TODO: Get Length

  return (
    <div className="search-heading">
      <div className="title-wrap">
        <h1>
          <span>' {searchTerm} '</span>에 대한{" "}
          {temporaryLength.toLocaleString()}개의 검색 결과
        </h1>
      </div>
    </div>
  );
}
