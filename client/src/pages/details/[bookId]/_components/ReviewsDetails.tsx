import { useRecoilValue } from "recoil";
import { reviewTabState } from "../../../../recoil/review-tab";
import { reviewSortOptionsState } from "../../../../recoil/review-select";
import { currentPageState } from "../../../../recoil/review-paginate";

import PaginateControl from "./PaginateControl";
import ReviewList from "./ReviewList";
import ReviewsSortTabList from "./ReviewsSortTabList";

import { useEffect, useRef, useState } from "react";

import { reviews, reviews2 } from "../../../_components/constants/review";
import { TReviews } from "../../../_components/types/review";

export default function ReviewsDetails() {
  const currTab = useRecoilValue(reviewTabState);
  const currSort = useRecoilValue(reviewSortOptionsState);
  const currPage = useRecoilValue(currentPageState);

  /* temporary data */
  const temporaryReviews: TReviews = [...reviews, ...reviews2];
  const pageTotal = 23;

  /* paginate-scroll-behavior */
  const [firstRender, setFirstRender] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [currPage]);

  /* API */
  useEffect(() => {
    // TODO: service-logic && default paginate, 기본 페이징 로직을 수행
    // TODO: currTab && getReviewsByTabList, 현재 선택된 탭에 따라 리뷰 데이터를 필터링
    // TODO: sortOpt && getReviewsBySortOpt, 현재 선택된 정렬 옵션에 따라 리뷰 데이터를 정렬
    // TODO: currTab, sortOpt && getReviewsByFilteredOpts, 현재 선택된 탭과 정렬 옵션에 따라 리뷰 데이터를 필터링하고 정렬
  }, [currTab, currSort, currPage]);

  useEffect(() => {
    // TODO: getReviewsAmount
  }, []);

  return (
    <div className="details-prod-reviews__wrap__reviews-details">
      <ReviewsSortTabList />
      <ReviewList ref={scrollRef} reviews={temporaryReviews} />
      {pageTotal > 1 && <PaginateControl pageTotal={pageTotal} />}
    </div>
  );
}
