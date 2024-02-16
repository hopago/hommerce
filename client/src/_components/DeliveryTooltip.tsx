import { useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";

type DeliveryTooltipProps = {
  show: "delivery" | "point";
  setShow: React.Dispatch<React.SetStateAction<"delivery" | "point" | null>>;
};

export default function DeliveryTooltip({
  show,
  setShow,
}: DeliveryTooltipProps) {
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tooltipRef.current) return;

    if (show) {
      tooltipRef.current.style.transition = "all .3s ease";
      setTimeout(() => {
        tooltipRef.current!.style.opacity = "1";
      }, 1);
    } else {
      tooltipRef.current.style.transition = "";
      tooltipRef.current.style.opacity = "0";
    }
  }, [show]);

  const onClick = () => {
    setShow(null);
  };

  return (
    <div className="delivery-tooltip" ref={tooltipRef}>
      <div className="delivery-tooltip__wrap">
        <div className="heading">
          <h1>배송비 안내</h1>
        </div>
        <div className="delivery-tooltip__wrap__body">
          <div className="col-item">
            <div className="title">기본배송</div>
            <div className="desc">
              <p>거리별 배송비 측정</p>
              <p>2,400&nbsp;~&nbsp;4,800</p>
            </div>
          </div>
          <div className="col-item">
            <div className="title">Hommerce 국내도서/외국도서</div>
            <div className="desc">
              <p>도서만 15,000원 이상 구매 시 무료배송</p>
            </div>
          </div>
          <div className="col-item">
            <div className="title">Hommerce-Only</div>
            <div className="desc">
              <p>플래티넘/골드 회원 이상 전체 품목 무료배송</p>
            </div>
          </div>
        </div>
      </div>
      <button className="close-btn" onClick={onClick}>
        <MdClose className="close-btn-icon" />
      </button>
    </div>
  );
}
