import { useEffect, useState } from "react";

import { getPageTotal } from "../../utils/getPageTotal";

import { useCreatorPagination } from "@/app/store/use-pagination";
import { useSelectReview } from "@/app/store/use-select-review";

type UsePaginatedReviewsProps = {
  reviews: ReviewLogs;
  sort: "최신순" | "오래된순";
};

const PAGE_THRESHOLD = 8;

export function usePaginatedReviews({
  reviews,
  sort,
}: UsePaginatedReviewsProps) {
  const [paginatedReviews, setPaginatedReviews] = useState<ReviewLogs>(reviews);

  const { currentPage, handleMoveToFirstPage } = useCreatorPagination();
  const { resetState } = useSelectReview();

  useEffect(() => {
    const computePaginatedReviews = () => {
      const startIdx = PAGE_THRESHOLD * (currentPage - 1);
      const endIdx = startIdx + PAGE_THRESHOLD;
      return reviews.slice(startIdx, endIdx);
    };

    setPaginatedReviews(computePaginatedReviews());
  }, [currentPage]);

  useEffect(() => {
    handleMoveToFirstPage();
    resetState();

    const sortReviews = (a: ReviewLog, b: ReviewLog) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sort === "최신순" ? dateB - dateA : dateA - dateB;
    };

    setPaginatedReviews((prev) => [...prev].sort(sortReviews));
  }, [sort]);

  useEffect(() => {
    resetState();
  }, [currentPage]);

  return {
    paginatedReviews,
    pageTotal: getPageTotal(reviews.length),
  };
}
