import { useEffect, useRef } from "react";

import { MdClose } from "react-icons/md";

export type CommonToolTipItem = {
  title: string;
  desc: string;
};

type CommonTooltipProps = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  items: CommonToolTipItem[];
};

export default function CommonTooltip({
  show,
  setShow,
  items,
}: CommonTooltipProps) {
  const tooltipRef = useRef<HTMLDivElement>(null);

  const onClick = () => {
    setShow(false);
  };

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
    <div className="common-tooltip" ref={tooltipRef}>
      <div className="common-tooltip__wrap">
        <button className="close-btn" onClick={onClick}>
          <MdClose className="close-btn-icon" />
        </button>
        <div className="heading">
          <h1>배송비 안내</h1>
        </div>
        <div className="common-tooltip__wrap__body">
          {items.map((item) => (
            <div className="col-item">
              <div className="title">{item.title}</div>
              <div className="desc">
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
