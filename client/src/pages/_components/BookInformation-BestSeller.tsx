import InfoTitle from "./InfoTitle";
import BestSellerItem from "./BestSellerItem";

import { bookParentCategory } from "./constants/category";

import { temporaryBestSellers } from "../../recoil/books";

export default function BookInformationBestSeller() {
  return (
    <div className="recommend-books__best-seller">
      <InfoTitle
        title="베스트 | 스테디"
        className="best-seller"
        category={bookParentCategory}
      />
      <div className="recommend-books__best-seller__grid">
        <ul className="recommend-books__best-seller__grid__contents">
          {temporaryBestSellers.map((book, i) => (
            <BestSellerItem
              key={`${book.id}${book.title}-best-seller`}
              book={book}
              i={i}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
