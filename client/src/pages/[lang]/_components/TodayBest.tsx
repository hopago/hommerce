import { MdArrowRight } from "react-icons/md";

import Heading from "./TodayPickHeading";
import ProdBooks from "./ProdBooks";
import OtherBooks from "./OtherBooks";

import { useRecoilValue } from "recoil";
import { booksState } from "../../../recoil/books";

export default function TodayBest() {
  const books = useRecoilValue(booksState);

  const prodBooks = books.slice(0, 2);
  const otherBooks = books.slice(2, books.length);

  const otherBooksTitle = otherBooks.map(book => book.title);

  return (
    <div className="lang-page-picks__best__container">
      <div className="lang-page-picks__best__container__heading">
        <Heading title="일간 베스트" />
        <div className="more-vert">
          <span>더보기</span>
          <div className="icon-wrap">
            <MdArrowRight />
          </div>
        </div>
      </div>
      <div className="lang-page-picks__best__container__book-list">
        <ProdBooks books={prodBooks} />
        <OtherBooks books={otherBooksTitle} />
      </div>
    </div>
  );
}
