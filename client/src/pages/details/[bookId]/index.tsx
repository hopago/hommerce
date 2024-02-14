import { GNB } from "../../[lang]/_components";
import { SearchSection } from "../../_components";

import { detailsBook } from "../../../recoil/books";

import SingleBook from "./_components/SingleBook";
import FixedPurchaseShortcut from "./_components/FixedPurchaseShortcut";

export default function DetailsIndex() {
  return (
    <>
      <SearchSection />
      <GNB
        parentCategory={detailsBook.parentCategory}
        subCategory={detailsBook.category}
      />
      <SingleBook book={detailsBook} />
      <FixedPurchaseShortcut
        price={detailsBook.price}
        discount={detailsBook.discount}
        unit={detailsBook.unit}
      />
    </>
  );
}
