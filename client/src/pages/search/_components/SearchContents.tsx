import PaginateControl from "../../details/[bookId]/_components/PaginateControl";

import { getPageTotal } from "../../details/[bookId]/utils/getPageTotal";

import { useSelectUI } from "../hooks/use-select-ui";

import BookList from "./BookList";
import FilterInfo from "./FilterInfo";
import SortBox from "./SortBox";

type SearchContentsProps = {
  docsLength: number;
};

export default function SearchContents({ docsLength }: SearchContentsProps) {
  const { onClick, display } = useSelectUI();

  const pageTotal = getPageTotal(docsLength);

  return (
    <div className="search-contents__container">
      <SortBox onClick={onClick} display={display} docsLength={docsLength} />
      <FilterInfo />
      <BookList display={display} />
      <PaginateControl pageTotal={pageTotal} />
    </div>
  );
}
