import FilterReviewLogs, { FilterReviewSkeleton } from "./FilterReviewLogs";
import ReviewLogTable from "./ReviewLogTable";
import PaginateControl from "../../../../_components/PaginateControl";

import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/app/lib/getQueryClient";
import { useFilterReviews } from "../hooks/use-filter-reviews";
import { daysToMs } from "../../../../utils/daysToMs";
import { usePaginatedReviews } from "../../../hooks/use-paginated-reviews";
import { fetchUserReviews } from "../services/fetchUserReviews";

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

  const { filter, searchTerm, sort } = useFilterReviews();

  const { data, error, isError } = useQuery<ReviewLogs>({
    queryKey: [QueryKeys.USER_REVIEW, filter, searchTerm],
    queryFn: () => fetchUserReviews({ filter, searchTerm }),
    staleTime: daysToMs(1),
    gcTime: daysToMs(3),
  });

  const { paginatedReviews, pageTotal } = usePaginatedReviews({
    reviews: temporaryReviewLogs,
    sort,
  });

  return (
    <>
      <FilterReviewLogs />
      <ReviewLogTable
        reviews={paginatedReviews}
        dataLength={temporaryReviewLogs.length}
      />
      <PaginateControl pageTotal={pageTotal} />
    </>
  );
}
