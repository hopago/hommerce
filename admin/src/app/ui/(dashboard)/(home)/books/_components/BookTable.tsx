import { Suspense } from "react";

import styles from "./book-search.module.css";

import { TableRowSkeleton } from "../../users/management/[username]/_components/TableRowSkeleton";

import { BookRowAsync } from "./BookRow";

type BookTableProps = {
  books: IBook[];
  isLoading: boolean;
};

export default function BookTable({ books, isLoading }: BookTableProps) {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableWrap}>
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
