import { TReviews } from "../../../_components/types/review";

import ReviewItem from "./ReviewItem";

type ReviewsListProps = {
  reviews: TReviews;
};

export default function ReviewList({ reviews }: ReviewsListProps) {
  return (
    <div className="reviews-list">
      <ul>
        {reviews.map((review, i) => (
          <ReviewItem key={`${review.id}-${i}`} review={review} />
        ))}
      </ul>
    </div>
  );
}
