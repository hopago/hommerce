import { useState } from "react";

import ShowDataToggle from "../../../../_components/ShowDataToggle";

type ReviewDescProps = {
  desc: string;
};

export default function ReviewDesc({ desc }: ReviewDescProps) {
  const hasPreview = desc.length > 100;

  const [show, setShow] = useState(false);

  const displayText = hasPreview && !show ? desc.slice(0, 100) + "..." : desc;

  return (
    <div className="review-list__item__review-desc">
      <span>{displayText}</span>
      {hasPreview && <ShowDataToggle show={show} setShow={setShow} />}
    </div>
  );
}
