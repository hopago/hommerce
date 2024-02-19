import { useEffect } from "react";

import { generateKey } from "../../../../utils/generate-key";

import { reviewsTotalRating } from "../../../_components/constants/reviews-rating";
import { ReviewRatingType } from "../../../_components/types/review";

import TotalRating from "./TotalRating";
import ScoreBar from "./ScoreBar";

type ReviewsTotalRatingProps = {
  bookId: string;
};

export default function ReviewsTotalRating({
  bookId,
}: ReviewsTotalRatingProps) {
  useEffect(() => {
    // TODO: findReviewsTotalRatingByBookId
  }, [bookId]);

  const scoreReverse: ReviewRatingType[] = ["5", "4", "3", "2", "1"];

  return (
    <div className="review-box total-rating">
      <div className="review-box__user-score">
        <span className="review-box__user-score__title">사용자 총점</span>
        <TotalRating rating={reviewsTotalRating.totalAvgRating} />
      </div>
      <div className="review-box__score-bar score-4">
        <div className="review-box__score-bar__vertical">
          {scoreReverse.map((score) => (
            <ScoreBar
              key={generateKey(score)}
              reviewsTotalRating={reviewsTotalRating}
              score={score}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
