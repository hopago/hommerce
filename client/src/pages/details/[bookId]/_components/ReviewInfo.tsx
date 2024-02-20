import { formatDate } from "../../../../utils/create-formatted-date";
import { createScoreIcons } from "../../../../utils/create-score-icons";

import {
  ReviewKeywords,
  ReviewRatingType,
} from "../../../_components/types/review";

type ReviewInfoProps = {
  user: {
    id: string;
    username: string;
  };
  buyWay: SellWay;
  createdAt: string | Date;
  rating: ReviewRatingType;
  keyword: ReviewKeywords;
};

export default function ReviewInfo({
  user,
  buyWay,
  createdAt,
  rating,
  keyword,
}: ReviewInfoProps) {
  const onClick = () => {};

  return (
    <div className="review-list__item__review-info">
      <div className="review-list__item__review-info__left">
        <div className="info-badge">
          <span>{buyWay}</span>
        </div>
        <span>{user.username}</span>
        <div className="divider" />
        <span>{formatDate(createdAt)}</span>
        <div className="divider" />
        <span className="report" onClick={onClick}>
          신고/차단
        </span>
      </div>
      <div className="review-list__item__review-info__right">
        <div className="score-icons">{createScoreIcons(Number(rating))}</div>
        <div className="divider" />
        <span>{keyword}</span>
      </div>
    </div>
  );
}
