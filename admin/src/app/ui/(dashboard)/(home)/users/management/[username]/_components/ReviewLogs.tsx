import FilterReviewLogs from "./FilterReviewLogs";
import ReviewLogTable from "./ReviewLogTable";
import PaginateControl from "../../../../_components/PaginateControl";

import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/app/lib/getQueryClient";
import { daysToMs } from "../../../../utils/daysToMs";
import { fetchUserReviews } from "../services/fetchUserReviews";

import { usePaginatedData } from "../../../hooks/use-paginated-data";
import { useHandleError } from "../hooks/use-handle-error";
import { useCreatorPagination } from "@/app/store/use-pagination";
import { useFilterReviews } from "@/app/store/use-filter-reviews";

import styles from "./review-log-list.module.css";
import { cn } from "@/app/ui/lib/utils";

export default function ReviewLogs({ userId }: { userId: string }) {
  const { filter, searchTerm, sort } = useFilterReviews();
  const { currentPage, handleMoveToFirstPage } = useCreatorPagination();

  const { data, error, isError, isLoading } = useQuery<ReviewData>({
    queryKey: [QueryKeys.USER_REVIEW, currentPage, filter, searchTerm],
    queryFn: () =>
      fetchUserReviews({ pageNum: currentPage, filter, searchTerm, userId }),
    staleTime: daysToMs(1),
    gcTime: daysToMs(3),
  });

  if (!data || !data.reviews || !data.pagination) return <NoContent />;

  const { paginatedData, pageTotal } = usePaginatedData({
    data: data.reviews,
    sort,
    handleMoveToFirstPage,
    currentPage,
  });

  useHandleError({ error, isError, fieldName: "리뷰" });

  return (
    <>
      <FilterReviewLogs />
      <ReviewLogTable
        isLoading={isLoading}
        reviews={paginatedData}
        dataLength={data.pagination.totalPages}
      />
      <PaginateControl pageTotal={pageTotal} />
    </>
  );
}

function NoContent() {
  return (
    <div className={styles.container}>
      <div className={cn(styles.wrap, styles.noContent)}>
        <span className={styles.noContent}>리뷰를 아직 작성하지 않았어요.</span>
      </div>
    </div>
  );
}

// const temporaryReviewLog: ReviewLog = {
//   _id: "mongoId_1837541092",
//   bookTitle: "인간관계론",
//   desc: "I could never stop doing this.",
//   createdAt: new Date(),
// };

// const temporaryReviewLogs: ReviewLogs = [...Array.from({ length: 22 })].map(
//   (_, i) => {
//     const log = { ...temporaryReviewLog };

//     log._id = log._id + i;

//     return log;
//   }
// );
