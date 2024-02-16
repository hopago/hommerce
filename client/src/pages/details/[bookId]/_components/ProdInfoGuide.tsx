import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import { calculatePoint } from "../../../../utils/calculate-point";
import { cn } from "../../../../lib/utils";

import PointTooltip from "../../../../_components/PointTooltip";
import DeliveryTooltip from "../../../../_components/DeliveryTooltip";

type ProdInfoGuideProps = {
  guideTitle: "적립/혜택" | "배송안내";
  type: "point" | "delivery";
  price?: number;
  deliverFee?: DeliveryFee | HommerceFee;
  openTooltip: "point" | "delivery" | null;
  setOpenTooltip: React.Dispatch<
    React.SetStateAction<"point" | "delivery" | null>
  >;
};

export default function ProdInfoGuide({
  guideTitle,
  type,
  price,
  deliverFee,
  openTooltip,
  setOpenTooltip,
}: ProdInfoGuideProps) {
  const onClick = (type: "point" | "delivery") => {
    if (openTooltip === type) {
      setOpenTooltip(null);
    } else {
      setOpenTooltip(type);
    }
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
            className={cn("icon-wrap", openTooltip === type && "active")}
            onClick={() => onClick(type)}
          >
            {openTooltip === type ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </div>
          {openTooltip === "point" ? <PointTooltip show={openTooltip} /> : null}
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
            className={cn("icon-wrap", openTooltip === type && "active")}
            onClick={() => onClick(type)}
          >
            {openTooltip === type ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </div>
          {openTooltip === "delivery" ? (
            <DeliveryTooltip show={openTooltip} setShow={setOpenTooltip} />
          ) : null}
        </div>
      </div>
    );
  }
}
