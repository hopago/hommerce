import { useEffect, useRef } from "react";
import NextBookItem from "./NextBookItem";

type NextBooksProps = {
  books: TBooks;
  currIndex: number;
};

export default function NextBooks({ books, currIndex }: NextBooksProps) {
  const orderedBooks = [
    ...books.filter((book, index) => {
      if (currIndex < index) {
        return book;
      }
    }),
  ];

  const filteredBooksInfo = [
    ...orderedBooks.map((book) => ({
      id: book.id,
      title: book.title,
      category: book.category,
      img: book.representImg,
      parentCategory: book.parentCategory,
    })),
  ];

  const slideRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (slideRef.current === null) return;

    slideRef.current.style.transition = "all 0.3s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currIndex * 190}px)`;
  }, [currIndex]);

  return (
    <div className="recommend-books__today-pick__contents__preview">
      <ol ref={slideRef}>
        {filteredBooksInfo.map((book) => (
          <NextBookItem key={book.id} book={book} />
        ))}
      </ol>
    </div>
  );
}
