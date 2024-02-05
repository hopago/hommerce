import { temporaryRecommendBooks } from "../../recoil/books";

import RecommendBookInformationBookItem from "./RecommendBookInformation-BookItem";

export default function RecommendBookInformationBookList() {
  return (
    <div className="recommend-books__user__horizontal__book-list">
      <ul>
        {temporaryRecommendBooks.map((book, i) => (
          <RecommendBookInformationBookItem book={book} i={i} />
        ))}
      </ul>
    </div>
  );
}
