import { HTMLAttributes, forwardRef } from "react";

import BookDetailsContents from "./BookDetailsContents";
import RecommendBooks from "./RecommendBooks";

interface Props extends HTMLAttributes<HTMLDivElement> {}

const DetailsContents = forwardRef<HTMLDivElement, Props>((_, ref) => {
  return (
    <div id="prod-info" ref={ref} className="details-prod-contents">
      <div className="details-prod-contents__horizontal">
        <BookDetailsContents />
        <RecommendBooks />
      </div>
    </div>
  );
});

export default DetailsContents;
