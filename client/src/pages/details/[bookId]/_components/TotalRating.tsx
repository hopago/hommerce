import React from "react";

import { createScoreIcons } from "../../../../utils/create-score-icons";

type TotalRatingProps = {
  rating: number;
};

export default function TotalRating({ rating }: TotalRatingProps) {
  const icons = createScoreIcons(rating);

  return (
    <div className="user-score__total">
      <div className="score-icons">
        {icons?.map((icon, i) => (
          <React.Fragment key={`score-${i + 1}`}>{icon}</React.Fragment>
        ))}
      </div>
      <div className="score-texts">
        <span>
          <strong>{rating}</strong>
        </span>
        <span>/5</span>
      </div>
    </div>
  );
}
