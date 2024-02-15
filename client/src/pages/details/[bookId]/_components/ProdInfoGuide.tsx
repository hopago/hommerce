import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import { calculatePoint } from "../../../../utils/calculate-point";
import { cn } from "../../../../lib/utils";

import { useState } from "react";

import PointTooltip from "../../../../_components/PointTooltip";
import DeliveryTooltip from "../../../../_components/DeliveryTooltip";

type ProdInfoGuideProps = {
  guideTitle: "적립/혜택" | "배송안내";
  type: "point" | "delivery";
  price?: string;
  deliverFee?: DeliveryFee | HommerceFee;
};

export default function ProdInfoGuide({
  guideTitle,
  type,
  price,
  deliverFee,
}: ProdInfoGuideProps) {
  const [showToolTip, setShowToolTip] = useState(false);

  const onClick = () => {
    setShowToolTip((prev) => !prev);
  };

  if (type === "point") {
    return (
      <div className="details-single-book__horizontal__price__prod-info__guide">
        <div className="guide-title">
          <span>{guideTitle}</span>
        </div>
        <div className="text-wrap">
          <span className="point-amount">{calculatePoint(price!)}P</span>
          <div
            className={cn("icon-wrap", showToolTip && "active")}
            onClick={onClick}
          >
            {showToolTip ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </div>
          {showToolTip && <PointTooltip show={showToolTip} />}
        </div>
      </div>
    );
  }

  if (type === "delivery") {
    return (
      <div className="details-single-book__horizontal__price__prod-info__guide">
        <div className="guide-title">
          <span>{guideTitle}</span>
        </div>
        <div className="text-wrap">
          <span className="delivery-fee">
            {Number(deliverFee).toLocaleString()}
            <span className="unit">원</span>
          </span>
          <div
            className={cn("icon-wrap", showToolTip && "active")}
            onClick={onClick}
          >
            {showToolTip ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </div>
          {showToolTip && <DeliveryTooltip />}
        </div>
      </div>
    );
  }
}
