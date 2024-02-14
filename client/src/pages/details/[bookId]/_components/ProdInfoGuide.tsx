import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import { calculatePoint } from "../../../../utils/calculate-point";
import { useState } from "react";

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
        <span>{guideTitle}</span>
        <div className="text-wrap">
          <span className="point-amount">{calculatePoint(price!)}</span>
          <div className="icon-wrap" onClick={onClick}>
            {showToolTip ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </div>
        </div>
      </div>
    );
  }

  if (type === "delivery") {
    return (
      <div className="details-single-book__horizontal__price__prod-info__guide">
        <span>{guideTitle}</span>
        <div className="text-wrap">
          <span>{deliverFee}</span>
          <div className="icon-wrap" onClick={onClick}>
            {showToolTip ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </div>
        </div>
      </div>
    );
  }
}
