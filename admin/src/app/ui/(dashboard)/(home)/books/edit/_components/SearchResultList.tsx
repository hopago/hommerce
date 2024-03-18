import Spinner from "@/app/ui/_components/Spinner";
import SearchResultItem from "./SearchResultItem";

import styles from "./book-search-input.module.css";

import { checkValidResponse } from "../../../utils/checkValidResponse";
import { cn } from "@/app/ui/lib/utils";

type SearchProps = {
  isLoading: boolean;
  search: IBook[];
};

function Loading() {
  return <Spinner text="데이터를 불러오는 중입니다." />;
}

function NoResults() {
  return (
    <div className={styles.spinner}>
      <span>검색 결과가 없습니다.</span>
    </div>
  );
}

function ResultList({ books }: { books: IBook[] }) {
  return (
    <ul className={styles.listContainer}>
      {books.map((book) => (
        <SearchResultItem key={book._id} book={book} />
      ))}
    </ul>
  );
}

export default function SearchResultList({ search, isLoading }: SearchProps) {
  function getSearchResult() {
    if (isLoading) return <Loading />;
    if (Array.isArray(search) && !search.length) return <NoResults />;
    if (checkValidResponse(search)) return <ResultList books={search} />;
    return null;
  }

  return (
    <div className={cn(styles.searchResultList, (isLoading || search) && styles.show)}>
      {getSearchResult()}
    </div>
  );
}
