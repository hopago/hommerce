import { useState } from "react";

import ShowDataToggle from "../../../../_components/ShowDataToggle";

type BookInsideProps = {
  bookInside: string;
};

export default function BookInside({ bookInside }: BookInsideProps) {
  const preview = bookInside.slice(0, 100);

  const [show, setShow] = useState(false);

  return (
    <div className="details-prod-contents__horizontal__inner__details-info">
      <div className="details-prod-contents__horizontal__inner__details-info__wrap">
        <div
          className="intro_sub-text"
          style={{ fontSize: "14px", lineHeight: "1.4" }}
        >
          {!show ? preview : bookInside}
        </div>
        <div className="divider" style={{ marginBottom: "16px" }} />
        <ShowDataToggle show={show} setShow={setShow} />
      </div>
    </div>
  );
}
