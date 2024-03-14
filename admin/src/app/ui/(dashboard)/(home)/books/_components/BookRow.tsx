import React from "react";

import Image from "next/image";

import { Navigate } from "../../users/management/[username]/_components/NavigateButton";

import { TableRowSkeleton } from "../../users/management/[username]/_components/TableRowSkeleton";

import { formatDate } from "../../utils/formatDate";

import styles from "./book-search.module.css";

type BookRowProps = {
  book: IBook;
  isLoading: boolean;
};

export const BookRowAsync = React.lazy(() => import("./BookRow"));

export default function BookRow({ book, isLoading }: BookRowProps) {
  if (isLoading) return <TableRowSkeleton />;

  return (
    <tr>
      <td>
        <div className={styles.bookInfo}>
          <Image
            src={book.representImg}
            width={90}
            height={180}
            alt={`${book.title}-representImg`}
            className={styles.bookImg}
          />
          <span>{book.title}</span>
        </div>
      </td>
      <td>{book.author}</td>
      <td>{book.publisher}</td>
      <td>{formatDate(book.createdAt)}</td>
      <td>
        <div className={styles.btnWrap}>
          <Navigate text="상세 페이지 이동" path={`/books/${book._id}`} />
        </div>
      </td>
    </tr>
  );
}
