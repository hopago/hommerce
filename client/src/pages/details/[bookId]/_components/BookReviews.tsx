import { HTMLAttributes, forwardRef } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const BookReviews = forwardRef<HTMLDivElement, Props>((_, ref) => {
  

  return (
    <div id="prod-review" ref={ref} className="details-prod-reviews">
      <div className="details-prod-reviews__heading">
        <h1>리뷰()</h1>
      </div>
    </div>
  );
});

export default BookReviews;
