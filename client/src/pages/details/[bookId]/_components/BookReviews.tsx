import { HTMLAttributes, forwardRef, useEffect, useState } from "react";

import { reviews, reviews2 } from "../../../_components/constants/review";

import { useParams } from "react-router-dom";

import CommonTooltip, {
  CommonToolTipItem,
} from "../../../../_components/CommonTooltip";
import ReviewsTotalRating from "./ReviewsTotalRating";
import ReviewsKeywords from "./ReviewsKeywords";

import { MdInfoOutline } from "react-icons/md";
import pencil from "../../../../assets/ico_pencil.png";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const BookReviews = forwardRef<HTMLDivElement, Props>((_, ref) => {
  const tooltipItems: CommonToolTipItem[] = [
    {
      title: "리워드 안내",
      desc: "구매 후 90일 이내에 평점 작성 시 e교환권 100원을 적립해드립니다.",
    },
    {
      title: "운영 원칙 안내",
      desc: "자유로운 의사 표현의 공간인 만큼 타인에 대한 배려를 부탁합니다. 일부 타인의 권리를 침해하거나 불편을 끼친다면 별도의 통보 없이 삭제될 수 있습니다.",
    },
  ];
  /* temporary data */
  const isBuyer = true;
  const length = reviews.length + reviews2.length;

  const params = useParams();
  const { bookId } = params;

  const [show, setShow] = useState(false);

  const handleTooltip = () => {
    setShow((prev) => !prev);
  };

  const handlePostReview = () => {};

  useEffect(() => {
    // TODO: findReviewsLengthByBookId
    // TODO: findIsBuyerByBookId
  }, [bookId]);

  return (
    <div id="prod-review" ref={ref} className="details-prod-reviews">
      <div className="details-prod-reviews__heading">
        <div className="title-wrap">
          <h1>리뷰 ({length})</h1>
          <div
            className="icon-wrap"
            style={{ position: "relative" }}
            onClick={handleTooltip}
          >
            <MdInfoOutline className="icon" />
            {show && (
              <CommonTooltip
                items={tooltipItems}
                show={show}
                setShow={setShow}
              />
            )}
          </div>
        </div>
        {isBuyer && (
          <button onClick={handlePostReview}>
            <img src={pencil} alt="write-review-icon" />
            <span>리뷰 작성</span>
          </button>
        )}
      </div>
      <div className="details-prod-reviews__reviews-total">
        <div className="details-prod-reviews__reviews-total__inner">
          <ReviewsTotalRating bookId={bookId!} />
          <ReviewsKeywords bookId={bookId!} />
        </div>
      </div>
    </div>
  );
});

export default BookReviews;
