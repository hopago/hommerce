import { useEffect } from "react";

type ReviewsTotalRatingProps = {
  bookId: string;
};

import { reviewsTotalRating } from "../../../_components/constants/reviews-rating";
import TotalRating from "./TotalRating";

export default function ReviewsTotalRating({
  bookId,
}: ReviewsTotalRatingProps) {
  useEffect(() => {
    // TODO: findReviewsTotalRatingByBookId
  }, [bookId]);

  const keys = Object.keys(reviewsTotalRating.ratingEachPert);
  const values = Object.values(reviewsTotalRating.ratingEachPert);

  const reviewsTotalRatingList = keys.map((key, index) => ({
    keyword: key,
    pert: values[index],
  }));

  return (
    <div className="review-box total-rating">
      <div className="user-score">
        <span>사용자 총점</span>
        <TotalRating rating={reviewsTotalRating.totalAvgRating} />
      </div>
      <div className="score-bar score-4">
        <img src="" alt="score-4" />
      </div>
    </div>
  );
}
