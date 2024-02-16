import { HTMLAttributes, forwardRef } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const BookReviews = forwardRef<HTMLDivElement, Props>((_, ref) => {
  return (
    <div id="prod-review" ref={ref} className="details-prod-reviews">
      <h1>리뷰 컨텐츠</h1>
      <h1>리뷰 컨텐츠</h1>
      <h1>리뷰 컨텐츠</h1>
      <h1>리뷰 컨텐츠</h1>
      <h1>리뷰 컨텐츠</h1>
      <h1>리뷰 컨텐츠</h1>
      <h1>리뷰 컨텐츠</h1>
      <h1>리뷰 컨텐츠</h1>
      <h1>리뷰 컨텐츠</h1>
      <h1>리뷰 컨텐츠</h1>
      <h1>리뷰 컨텐츠</h1>
      <h1>리뷰 컨텐츠</h1>
      <h1>리뷰 컨텐츠</h1>
      <h1>리뷰 컨텐츠</h1>
      <h1>리뷰 컨텐츠</h1>
      <h1>리뷰 컨텐츠</h1>
    </div>
  );
});

export default BookReviews;
