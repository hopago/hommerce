import NextIcon from "./NextIcon";
import PrevIcon from "./PrevIcon";
import NextBooks from "./NextBooks";
import SingleBook from "./SingleBook";

import { bookParentCategory } from "./constants/Category";

import { useRecoilValue } from "recoil";
import { booksState, selectedCurrentBook } from "../../recoil/books";

import { useState } from "react";
import InfoTitle from "./InfoTitle";

export default function BookInformation() {
  const [currIndex, setCurrIndex] = useState(0);

  const books = useRecoilValue(booksState);
  const currentBook = useRecoilValue(selectedCurrentBook(currIndex));

  const handlePrev = () => {
    if (currIndex !== 0) {
      setCurrIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currIndex < books.length) {
      setCurrIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="today-pick__book-info">
      <InfoTitle title="이달의 책" category={bookParentCategory} />
      <PrevIcon handlePrev={handlePrev} />
      <SingleBook currentBook={currentBook} />
      <NextBooks books={books.slice(currIndex, currIndex + 3)} />
      <NextIcon handleNext={handleNext} />
    </div>
  );
}
