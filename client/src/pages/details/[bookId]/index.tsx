import { GNB } from "../../[lang]/_components";
import { SearchSection } from "../../_components";

import { detailsBook } from "../../../recoil/books";

import SingleBook from "./_components/SingleBook";
import FixedPurchaseShortcut from "./_components/FixedPurchaseShortcut";

import { useState } from "react";

export default function DetailsIndex() {
  const [currSellType, setCurrSellType] = useState<SellWay>("종이책");

  return (
    <>
      <SearchSection />
      <GNB
        parentCategory={detailsBook.parentCategory}
        subCategory={detailsBook.category}
      />
      <SingleBook
        book={detailsBook}
        currSellType={currSellType}
        setCurrSellType={setCurrSellType}
      />
      <FixedPurchaseShortcut
        price={
          currSellType === "종이책" ? detailsBook.price : detailsBook.eBookPrice
        }
        discount={detailsBook.discount}
        unit={detailsBook.unit}
      />
    </>
  );
}
