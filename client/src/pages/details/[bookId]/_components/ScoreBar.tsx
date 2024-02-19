import { createScoreIcons } from "../../../../utils/create-score-icons";

import { ReviewRatingType } from "../../../_components/types/review";
import { ReviewsTotalRating } from "../../../_components/types/review-total";

type ScoreBarProps = {
  score: ReviewRatingType;
  reviewsTotalRating: ReviewsTotalRating;
};

export default function ScoreBar({ score, reviewsTotalRating }: ScoreBarProps) {
  return (
    <div className="review-box__score-bar__vertical__item">
      <div className="icons">{createScoreIcons(Number(score))}</div>
      <div className="fill-bar">
        <div className="bg" />
        <div
          className="fill"
          style={{
            width: `${reviewsTotalRating.ratingEachPert[score]}%`,
          }}
        />
      </div>
      <div className="text">
        <span>{reviewsTotalRating.ratingEachPert[score]}%</span>
      </div>
    </div>
  );
}
