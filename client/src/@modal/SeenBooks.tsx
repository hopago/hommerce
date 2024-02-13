import { useEffect, useState } from "react";

import SeenBookItem from "./SeenBookItem";
import SortHeader from "./SortHeader";

type SeenBooksProps = {
  books: TBooks;
  option: BookParentCategory | "전체";
};

export default function SeenBooks({ books, option }: SeenBooksProps) {
  const [bookList, setBookList] = useState(books);

  useEffect(() => {
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
        <div className="scroll-inner">
          <ul>
            {bookList.map((book) => (
              <SeenBookItem key={`${book.id}-${book.title}`} book={book} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
