import { useRecoilValue } from "recoil";
import { selectedBookState } from "../../../recoil/selected-book";

import { UIType } from "../hooks/use-select-ui";

import SortBoxButtons from "./SortBoxButtons";

type SortBoxProps = {
  onClick: (display: UIType) => void;
  display: UIType;
  docsLength: number;
};

export default function SortBox({
  onClick,
  display,
  docsLength,
}: SortBoxProps) {
  const selectedBooks = useRecoilValue(selectedBookState);

  return (
    <div className="search-contents__container__sort-box">
      <div className="search-contents__container__sort-box__wrapper">
        <Title
          selectedBooksLength={selectedBooks.length}
          docsLength={docsLength}
        />
        <SortBoxButtons onClick={onClick} display={display} />
      </div>
    </div>
  );
}

function Title({
  docsLength,
  selectedBooksLength,
}: {
  docsLength: number;
  selectedBooksLength: number;
}) {
  return selectedBooksLength ? (
    <div className="title-wrap">
      선택 <span>{selectedBooksLength.toLocaleString()}</span>건
    </div>
  ) : (
    <div className="title-wrap">
      전체 <span>{docsLength.toLocaleString()}</span>건
    </div>
  );
}
