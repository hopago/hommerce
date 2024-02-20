import { forwardRef } from "react";
import { TReviews } from "../../../_components/types/review";

import ReviewItem from "./ReviewItem";

type ReviewsListProps = {
  reviews: TReviews;
};

const ReviewList = forwardRef<HTMLDivElement, ReviewsListProps>(
  ({ reviews }, ref) => {
    return (
      <div className="reviews-list" ref={ref}>
        <ul>
          {reviews.map((review, i) => (
            <ReviewItem key={`${review.id}-${i}`} review={review} />
          ))}
        </ul>
      </div>
    );
  }
);

export default ReviewList;
