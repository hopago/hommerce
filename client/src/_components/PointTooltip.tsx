import { useEffect, useRef } from "react";

import branch from "../assets/ico_branch.png";

export default function PointTooltip({ show }: { show: "delivery" | "point" }) {
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

  return (
    <div className="point-tooltip" ref={tooltipRef}>
      <div className="point-tooltip__wrap">
        <div className="default">
          <span className="title">기본적립</span>
          <div className="desc">
            <div className="desc-info">
              <img src={branch} alt="branch-icon" />
              <span>5% 적립</span>
            </div>
            <div className="amount">850P</div>
          </div>
        </div>
        <div className="additional">
          <div className="title">추가적립</div>
          <ul>
            <li>
              <div className="desc">5만원 이상 구매 시 추가</div>
              <div className="amount">2,000P</div>
            </li>
            <li>
              <div className="desc">3만원 이상 구매 시 추가</div>
              <div className="amount">최대 850P</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
