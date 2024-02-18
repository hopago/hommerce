import { GNB } from "../../[lang]/_components";
import { SearchSection } from "../../_components";

import { detailsBook } from "../../../recoil/books";

import SingleBook from "./_components/SingleBook";
import FixedPurchaseShortcut from "./_components/FixedPurchaseShortcut";
import FixedDetailsTabList from "./_components/FixedDetailsTabList";
import DetailsContents from "./_components/DetailsContents";
import BookReviews from "./_components/BookReviews";
import AuthorInfo from "./_components/AuthorInfo";

import { useEffect, useRef, useState } from "react";

import { useSetRecoilState } from "recoil";
import { setGNBCategory } from "../../../recoil/use-category";

export type DetailsIndexIds = "prod-info" | "prod-review";

export default function DetailsIndex() {
  const [currSellType, setCurrSellType] = useState<SellWay>("종이책");

  const setCategory = useSetRecoilState(setGNBCategory);

  useEffect(() => {
    setCategory({
      parentCategory: detailsBook.parentCategory,
      category: detailsBook.category,
    });
  }, [detailsBook]);

  const [isInView, setIsInView] = useState<DetailsIndexIds | null>(null);
  const prodInfoRef = useRef(null);
  const reviewRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            setIsInView(entry.target.id as DetailsIndexIds);
          }
        });
      },
      {
        threshold: 0,
      }
    );

    if (prodInfoRef.current) {
      observer.observe(prodInfoRef.current);
    }

    if (reviewRef.current) {
      observer.observe(reviewRef.current);
    }

    return () => {
      if (prodInfoRef.current) {
        observer.unobserve(prodInfoRef.current);
      }
      if (reviewRef.current) {
        observer.unobserve(reviewRef.current);
      }
    };
  }, []);

  return (
    <>
      <SearchSection />
      <FixedDetailsTabList isInView={isInView} />
      <GNB />
      <SingleBook
        book={detailsBook}
        currSellType={currSellType}
        setCurrSellType={setCurrSellType}
      />
      <DetailsContents ref={prodInfoRef} />
      <AuthorInfo authorName={detailsBook.author} />
      <BookReviews ref={reviewRef} />
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
