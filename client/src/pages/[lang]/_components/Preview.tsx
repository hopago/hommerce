import { useEffect, useRef } from "react";
import PreviewBook from "./PreviewBook";

type PreviewProps = { books: TBooks; currIndex: number };

export default function Preview({ books, currIndex }: PreviewProps) {
  const filteredBooksInfo = books.map((book) => {
    const { img, id } = book;

    const filterBookInfo = {
      img,
      id,
    };

    return filterBookInfo;
  });

  const slideRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (currIndex > books.length - 5 && slideRef.current !== null) {
      slideRef.current.style.transition = "";
      return;
    }

    if (slideRef.current !== null) {
      slideRef.current.style.transition = "all 0.3s ease-in-out";
      slideRef.current.style.transform = `translateX(-${currIndex * 136}px)`;
    }
  }, [currIndex]);

  return (
    <div className="lang-page-picks__today__vertical__preview">
      <ul ref={slideRef}>
        {filteredBooksInfo.map((book, i) => (
          <PreviewBook
            key={`${book.id}-${book.img}`}
            currIndex={currIndex}
            i={i}
            book={book}
          />
        ))}
      </ul>
    </div>
  );
}
