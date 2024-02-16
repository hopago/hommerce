import { useState } from "react";

import ShowDataToggle from "../../../../_components/ShowDataToggle";

type BookPublisherReview = {
  review: string;
};

export default function BookPublisherReview({ review }: BookPublisherReview) {
  const preview = review.slice(0, 100);

  const [show, setShow] = useState(false);

  return (
    <div className="details-prod-contents__horizontal__inner__details-info">
      <div className="details-prod-contents__horizontal__inner__details-info__wrap">
        <div
          className="intro_sub-text"
          style={{ fontSize: "14px", lineHeight: "1.4" }}
        >
          {!show ? preview : review}
        </div>
        <div className="divider" style={{ marginBottom: "16px" }} />
        <ShowDataToggle show={show} setShow={setShow} />
      </div>
    </div>
  );
}
