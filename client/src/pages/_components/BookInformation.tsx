import NextIcon from "./NextIcon";
import PrevIcon from "./PrevIcon";
import NextBooks from "./NextBooks";
import SingleBook from "./SingleBook";
import InfoTitle from "./InfoTitle";

import { bookParentCategory } from "./constants/category";

import { useRecoilValue } from "recoil";
import { booksState, selectedCurrentBook } from "../../recoil/books";

import { useEffect, useState } from "react";

export default function BookInformation() {
  const [currIndex, setCurrIndex] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);

  const books = useRecoilValue(booksState);
  const currentBook = useRecoilValue(selectedCurrentBook(currIndex));

  const handlePrev = () => {
    if (currIndex !== 0) {
      setCurrIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currIndex + 3 < books.length - 4) {
      setCurrIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setPrevDisabled(false);
    setNextDisabled(false);

    if (currIndex === 0) {
      return setPrevDisabled(true);
    }
    if (currIndex + 3 === books.length - 4) {
      return setNextDisabled(true);
    }
  }, [currIndex]);

  {/* TODO: disabled 조건에서 lazy-fetching, setNewBooks or hasNextPage: false일 경우 disabled */}

  return (
    <div className="recommend-books__today-pick">
      <InfoTitle title="이달의 책" category={bookParentCategory} />
      <PrevIcon prevDisabled={prevDisabled} handlePrev={handlePrev} />
      <div className={"recommend-books__today-pick__contents"}>
        <SingleBook currentBook={currentBook} />
        <NextBooks
          currIndex={currIndex}
          books={books}
        />
      </div>
      <NextIcon nextDisabled={nextDisabled} handleNext={handleNext} />
    </div>
  );
}
