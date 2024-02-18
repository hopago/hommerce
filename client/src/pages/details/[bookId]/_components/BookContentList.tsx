import { useState } from "react";

import ShowDataToggle from "../../../../_components/ShowDataToggle";

export default function BookContentList({
  contentList,
}: {
  contentList: string;
}) {
  const preview = contentList.slice(0, 100);

  const [show, setShow] = useState(false);

  return (
    <div className="details-prod-contents__horizontal__inner__details-info">
      <div className="details-prod-contents__horizontal__inner__details-info__wrap">
        <div
          className="intro_sub-text"
          style={{ fontSize: "14px", lineHeight: "1.4" }}
        >
          {!show ? preview + "..." : contentList}
        </div>
        <div className="divider" style={{ marginBottom: "16px" }} />
        <ShowDataToggle show={show} setShow={setShow} />
      </div>
    </div>
  );
}
