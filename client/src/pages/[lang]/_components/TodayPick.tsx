import NextIcon from "../../_components/NextIcon";
import PrevIcon from "../../_components/PrevIcon";
import CurrentBook from "./CurrentBook";
import Preview from "./Preview";
import Heading from "./TodayPickHeading";

import { useRecoilValue } from "recoil";
import { booksState, selectedCurrentBook } from "../../../recoil/books";

import { useEffect, useState } from "react";

export default function TodayPick() {
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
    if (currIndex < books.length - 1) {
      setCurrIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setPrevDisabled(false);
    setNextDisabled(false);

    if (currIndex === 0) {
      return setPrevDisabled(true);
    }
    if (currIndex === books.length - 1) {
      return setNextDisabled(true);
    }
  }, [currIndex]);

  return (
    <div className="lang-page-picks__today__vertical">
      <Heading title="오늘의 선택" />
      <CurrentBook book={currentBook} />
      <Preview setCurrIndex={setCurrIndex} currIndex={currIndex} books={books} />
      <div className="lang-page-picks__today__vertical__slide-btn">
        <div className="process">
          <div className="fill" style={{ width: `${(currIndex + 1) * 10}%` }} />
          <div className="bg" />
        </div>
        <PrevIcon prevDisabled={prevDisabled} handlePrev={handlePrev} />
        <NextIcon nextDisabled={nextDisabled} handleNext={handleNext} />
      </div>
    </div>
  );
}
