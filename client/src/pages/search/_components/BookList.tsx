import { useEffect } from "react";

import { cn } from "../../../lib/utils";

import { UIType } from "../hooks/use-select-ui";

import { useRecoilValue } from "recoil";
import { books as temporaryBooks } from "../../../recoil/books";
import { searchFilterState } from "../../../recoil/search-filter";
import { searchSortState } from "../../../recoil/search-sort";
import { currentPageState } from "../../../recoil/review-paginate";

import BookItem from "./BookItem";

type BookListProps = {
  display: UIType;
};

export default function BookList({ display }: BookListProps) {
  const filter = useRecoilValue(searchFilterState);
  const sort = useRecoilValue(searchSortState);
  const currPage = useRecoilValue(currentPageState);

  useEffect(() => {
    // TODO: getBooksBySearchTerm
  }, [filter, sort, currPage]);

  return (
    <div className="search-contents__container__book-list">
      <ul className={cn("", display === "flex" ? "flex" : "gird")}>
        {temporaryBooks.map((book, i) => (
          <BookItem key={`${book.id}-${i}`} book={book} />
        ))}
      </ul>
    </div>
  );
}
