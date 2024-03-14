import { Suspense } from "react";

import styles from "./book-search.module.css";

import { TableRowSkeleton } from "../../users/management/[username]/_components/TableRowSkeleton";

import { BookRowAsync } from "./BookRow";
import SortReview from "../../_components/SortDataButton";
import { creatorFilterBooks } from "@/app/store/use-filter";
import { useFilter } from "../../hooks/use-filter";

type BookTableProps = {
  books: IBook[];
  isLoading: boolean;
  dataLength: number;
};

export default function BookTable({
  books,
  isLoading,
  dataLength,
}: BookTableProps) {
  const props = creatorFilterBooks();
  const { sort, handleSort, show, toggleShow, setShow } = useFilter(props);

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableWrap}>
        <SortReview
          dataLength={dataLength}
          sort={sort}
          handleSort={handleSort}
          show={show}
          toggleShow={toggleShow}
          setShow={setShow}
        />
        <table>
          <thead>
            <tr>
              <td>제목</td>
              <td>저자</td>
              <td>출판사</td>
              <td>출판일</td>
            </tr>
          </thead>
          <tbody>
            {books.map((book, i) => (
              <Suspense
                key={`${book._id}-${i}`}
                fallback={<TableRowSkeleton />}
              >
                <BookRowAsync book={book} isLoading={isLoading} />
              </Suspense>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
