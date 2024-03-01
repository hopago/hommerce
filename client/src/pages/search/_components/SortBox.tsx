import { UIType } from "../hooks/use-select-ui";
import SortBoxButtons from "./SortBoxButtons";

type SortBoxProps = {
  onClick: (display: UIType) => void;
  display: UIType;
  docsLength: number;
}

export default function SortBox({ onClick, display, docsLength }: SortBoxProps) {
  return (
    <div className="search-contents__container__sort-box">
      <div className="search-contents__container__sort-box__wrapper">
        <div className="title-wrap">
          전체 <span>{docsLength.toLocaleString()}</span>건
        </div>
        <SortBoxButtons onClick={onClick} display={display} />
      </div>
    </div>
  );
}
