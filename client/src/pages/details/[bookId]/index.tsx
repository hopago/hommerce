import { GNB } from "../../[lang]/_components";
import { SearchSection } from "../../_components";

import { detailsBook } from "../../../recoil/books";

import SingleBook from "./_components/SingleBook";

export default function DetailsIndex() {
  return (
    <>
      <SearchSection />
      <GNB
        parentCategory={detailsBook.parentCategory}
        subCategory={detailsBook.category}
      />
      <SingleBook book={detailsBook} />
    </>
  );
}
