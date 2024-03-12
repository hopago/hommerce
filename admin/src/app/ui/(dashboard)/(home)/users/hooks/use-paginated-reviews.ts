import { useEffect, useState } from "react";

import { getPageTotal } from "../../utils/getPageTotal";

import { useCreatorPagination } from "@/app/store/use-pagination";
import { useSelectReview } from "@/app/store/use-select-review";

type UsePaginatedReviewsProps = {
  reviews: ReviewLogs;
};

export function usePaginatedReviews({ reviews }: UsePaginatedReviewsProps) {
  const [paginatedReviews, setPaginatedReviews] = useState<ReviewLogs>(reviews);

  const pageTotal = getPageTotal(reviews.length);

  const { currentPage } = useCreatorPagination();
  const { resetState } = useSelectReview();

  useEffect(() => {
    const PAGE_THRESHOLD = 8;

    const skipNumber = PAGE_THRESHOLD * (currentPage - 1);

    const slicedReviews = reviews.slice(
      skipNumber,
      skipNumber + PAGE_THRESHOLD
    );

    setPaginatedReviews(slicedReviews);
  }, [currentPage]);

  useEffect(() => {
    resetState();
  }, [currentPage]);

  return {
    paginatedReviews,
    pageTotal,
  };
}
