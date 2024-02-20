import { useState } from "react";

import { TReview } from "../../../_components/types/review";
import { ReviewReplies } from "../../../_components/types/review-reply";

import ReviewDesc from "./ReviewDesc";
import ReviewInfo from "./ReviewInfo";
import ReviewInteract from "./ReviewInteract";
import ReviewRepliesContainer from "./ReviewReplies";

type ReviewItemProps = {
  review: TReview;
};

export default function ReviewItem({ review }: ReviewItemProps) {
  // TODO: review - userId - findUserById

  /* temporary data */
  const user = {
    id: "1",
    username: "hopago",
  };
  const reviewReplies: ReviewReplies = [
    {
      id: "1",
      username: "dopago",
      desc: `좋은결과있길바라겠습니다 ㅎㅎ
      아드님이 너무 힘이 될거같습니다!`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: "2",
      username: "paka",
      desc: "좋은 결과가 있으리라 기대합니다",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const [show, setShow] = useState(false);

  return (
    <li className="review-list__item">
      <ReviewInfo
        user={user}
        buyWay={review.buyWay}
        createdAt={review.createdAt}
        rating={review.rating}
        keyword={review.keyword}
      />
      <ReviewDesc desc={review.desc} />
      <ReviewInteract
        repliesLength={reviewReplies.length}
        liked={review.liked}
        setShow={setShow}
      />
      {show && <ReviewRepliesContainer replies={reviewReplies} />}
    </li>
  );
}
