import { useEffect } from "react";

import star from "../../../assets/ico_fill-score.png";

import ParentCategoryBadge from "../../_components/ParentCategoryBadge";
import SelectBook from "./SelectBook";
import BookItemButtons from "./BookItemButtons";

type BookItemProps = {
  book: TBook;
};

export default function BookItem({ book }: BookItemProps) {
  useEffect(() => {
    // TODO: findReviewTotalByBookId
  }, [book.id]);

  return (
    <li>
      <SelectBook book={book} />
      <div className="book-info">
        <div className="img-wrap">
          <img src={book.representImg} alt={book.title} />
        </div>
        <div className="book-info__text">
          {book.parentCategory ? (
            <ParentCategoryBadge text={book.parentCategory} />
          ) : null}
          <p className="title">{book.title}</p>
          <p className="author">{book.author}</p>
          <div className="book-info__text__price">
            {book.discount ? (
              <span className="discount">{book.discount}%</span>
            ) : null}
            <span className="price" style={{ fontWeight: "bold" }}>
              {book.price.toLocaleString()}
            </span>
            <span className="unit">{book.unit}</span>
          </div>
        </div>
        <div className="book-info__review">
          <div className="img-wrap">
            <img src={star} alt="review-icon" />
            <span className="review-score">0.0</span>
            <span className="review-length">(0)</span>
          </div>
        </div>
      </div>
      <BookItemButtons bookId={book.id} />
    </li>
  );
}
