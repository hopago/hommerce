import star from "../../../assets/ico_fill-score.png";

import { getFullDate } from "../../../utils/create-formatted-date";

import ParentCategoryBadge from "../../_components/ParentCategoryBadge";
import SelectBook from "./SelectBook";
import BookItemButtons from "./BookItemButtons";

import { Link } from "react-router-dom";

import { UIType } from "../hooks/use-select-ui";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../../lib/react-query/query-key";
import { QueryFns } from "../../../lib/react-query/queryFn";
import { daysToMs } from "../../../lib/react-query/utils";
import { ServerError } from "../../../fetcher/error";
import { ReviewTotalData } from "../../../types/api/review-total";

type BookItemProps = {
  book: IBook;
  display: UIType;
};

export default function BookItem({ book, display }: BookItemProps) {
  const { data, isSuccess, error } = useQuery({
    queryKey: [QueryKeys.REVIEW_TOTAL, book._id],
    queryFn: () => QueryFns.GET_REVIEW_TOTAL_BY_BOOK_ID({ bookId: book._id }),
    staleTime: daysToMs(1),
    gcTime: daysToMs(3),
    enabled: !!book._id,
  });

  const isReviewNotWritten =
    error instanceof ServerError &&
    error.status === 404 &&
    error.message === "Review total not found.";

  return (
    <li>
      <SelectBook book={book} />
      <div className="book-info">
        <Link to={`/details/${book._id}`} className="link">
          <div className="img-wrap">
            <img src={book.representImg} alt={book.title} />
          </div>
        </Link>
        <div className="book-info__text">
          {book.parentCategory
            ? book.parentCategory.map((category) => (
                <ParentCategoryBadge text={category} />
              ))
            : null}
          <Link to={`/details/${book._id}`} className="link">
            <p className="title">{book.title}</p>
          </Link>
          <div className="book-info__text__horizontal">
            <p className="author">{book.author}</p>
            <span>·</span>
            <p className="createdAt">{getFullDate(book.createdAt)}</p>
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
            <ReviewInfo
              isSuccess={isSuccess}
              data={data!}
              isReviewNotWritten={isReviewNotWritten}
            />
          </div>
        </div>
      </div>
      <BookItemButtons
        bookId={book._id}
        title={book.title}
        author={book.author}
        img={book.representImg}
        display={display}
      />
    </li>
  );
}

function ReviewInfo({
  isSuccess,
  data,
  isReviewNotWritten,
}: {
  isSuccess: boolean;
  data: ReviewTotalData;
  isReviewNotWritten: boolean;
}) {
  if (isSuccess) {
    return (
      <>
        <span className="review-score">{data.total.totalRating}</span>
        <span className="review-length">({data.reviewsLength})</span>
      </>
    );
  }

  if (isReviewNotWritten) {
    return (
      <>
        <span className="review-score">{"0.0"}</span>
        <span className="review-length">(0)</span>
      </>
    );
  }

  return null;
}
