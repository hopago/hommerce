import { getPageTotal } from "../../../../utils/getPageTotal";

import FilterReviewLogs, { FilterReviewSkeleton } from "./FilterReviewLogs";
import ReviewLogTable from "./ReviewLogTable";
import PaginateControl from "../../../../_components/PaginateControl";

import { useEffect, useState } from "react";
import { useCreatorPagination } from "@/app/store/use-pagination";

export default function ReviewLogs() {
  const temporaryReviewLog: ReviewLog = {
    _id: "mongoId_1837541092",
    bookTitle: "인간관계론",
    desc: "I could never stop doing this.",
    createdAt: new Date(),
  };

  const temporaryReviewLogs: ReviewLogs = [...Array.from({ length: 22 })].map(
    (_, i) => {
      const log = { ...temporaryReviewLog };

      log._id = log._id + i;

      return log;
    }
  );

  const [reviews, setReviews] = useState<ReviewLogs>(temporaryReviewLogs);

  const pageTotal = getPageTotal(temporaryReviewLogs.length);

  const { currentPage } = useCreatorPagination();

  useEffect(() => {
    const PAGE_THRESHOLD = 8;

    const skipNumber = PAGE_THRESHOLD * (currentPage - 1);

    const slicedReviews = temporaryReviewLogs.slice(
      skipNumber,
      skipNumber + PAGE_THRESHOLD
    );

    setReviews(slicedReviews);
  }, [currentPage]);

  return (
    <>
      <FilterReviewLogs />
      <ReviewLogTable
        reviews={reviews}
        dataLength={temporaryReviewLogs.length}
      />
      <PaginateControl pageTotal={pageTotal} />
    </>
  );
}

export const ReviewLogsSkeleton = () => {
  return (
    <>
      <FilterReviewSkeleton />
    </>
  );
};
