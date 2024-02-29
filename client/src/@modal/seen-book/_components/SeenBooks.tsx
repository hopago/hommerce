import { useEffect, useState } from "react";

import SeenBookItem from "./SeenBookItem";
import SortHeader from "./SortHeader";
import EmptyStateSkeleton from "./EmptyStateSkeleton";

import { cn } from "../../../lib/utils";

type SeenBooksProps = {
  books: TBooks;
  option: BookParentCategory | "전체";
};

export default function SeenBooks({ books, option }: SeenBooksProps) {
  const [bookList, setBookList] = useState(books);

  useEffect(() => {
    if (option === "전체") {
      setBookList(books);
    }

    if (option !== "전체") {
      const newBookList = books.filter(
        (book) => book.parentCategory === option
      );

      setBookList(newBookList);
    }
  }, [option]);

  return (
    <div className="seen-book-list__wrap__book-list">
      <div className="seen-book-list__wrap__book-list__wrap">
        <SortHeader length={bookList.length} />
        <div className={cn("scroll-inner", !bookList.length && "empty")}>
          <ul>
            {bookList.length > 0 ? (
              bookList.map((book) => (
                <SeenBookItem key={`${book.id}-${book.title}`} book={book} />
              ))
            ) : (
              <EmptyStateSkeleton option={option} />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
