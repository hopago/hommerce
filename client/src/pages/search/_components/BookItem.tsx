import { useEffect } from "react";

import star from "../../../assets/ico_fill-score.png";

import { getFullDate } from "../../../utils/create-formatted-date";

import ParentCategoryBadge from "../../_components/ParentCategoryBadge";
import SelectBook from "./SelectBook";
import BookItemButtons from "./BookItemButtons";

import { Link } from "react-router-dom";

import { UIType } from "../hooks/use-select-ui";

type BookItemProps = {
  book: IBook;
  display: UIType;
};

export default function BookItem({ book, display }: BookItemProps) {
  useEffect(() => {
    // TODO: findReviewTotalByBookId
  }, [book.id]);

  return (
    <li>
      <SelectBook book={book} />
      <div className="book-info">
        <Link to={`/details/${book.id}`} className="link">
          <div className="img-wrap">
            <img src={book.representImg} alt={book.title} />
          </div>
        </Link>
        <div className="book-info__text">
          {book.parentCategory ? book.parentCategory.map(category => (
            <ParentCategoryBadge text={category} />
          )) : null}
          <Link to={`/details/${book.id}`} className="link">
            <p className="title">{book.title}</p>
          </Link>
          <div className="book-info__text__horizontal">
            <p className="author">{book.author}</p>
            <span>·</span>
            <p className="createdAt">{getFullDate(new Date())}</p>
          </div>
          <div className="book-info__text__price">
            {book.discount ? (
              <span className="discount">{book.discount}%</span>
            ) : null}
            <span className="price" style={{ fontWeight: "bold" }}>
              {book.price.toLocaleString()}
            </span>
            <span className="unit">{book.unit}</span>
          </div>
          <div className="book-info__review">
            <div className="img-wrap">
              <img src={star} alt="review-icon" />
            </div>
            <span className="review-score">0.0</span>
            <span className="review-length">(0)</span>
          </div>
        </div>
      </div>
      <BookItemButtons bookId={book.id} display={display} />
    </li>
  );
}
