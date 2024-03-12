import FilterReviewLogs from "./FilterReviewLogs";
import ReviewLogTable from "./ReviewLogTable";
import PaginateControl from "../../../../_components/PaginateControl";

import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/app/lib/getQueryClient";
import { daysToMs } from "../../../../utils/daysToMs";
import { fetchUserReviews } from "../services/fetchUserReviews";

import { usePaginatedReviews } from "../../../hooks/use-paginated-reviews";
import { useHandleError } from "../hooks/use-handle-error";
import { useCreatorPagination } from "@/app/store/use-pagination";
import { useFilterReviews } from "@/app/store/use-filter-reviews";

export default function ReviewLogs({ userId }: { userId: string }) {
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

  // 클라이언트 상태 반영 후 store값으로 쿼리 패칭
  const { filter, searchTerm, sort } = useFilterReviews();
  const { currentPage, handleMoveToFirstPage } = useCreatorPagination();

  // TODO: 데이터 타입 data[0].reviews === ReviewLogs, data[0].pagination.totalPages === pageTotal
  const { data, error, isError, isLoading } = useQuery<ReviewData>({
    queryKey: [QueryKeys.USER_REVIEW, currentPage, filter, searchTerm],
    queryFn: () =>
      fetchUserReviews({ pageNum: currentPage, filter, searchTerm, userId }),
    staleTime: daysToMs(1),
    gcTime: daysToMs(3),
  });

  if (!data || !data.reviews || !data.pagination) return null; // TODO: No-Content-ui

  const { paginatedReviews, pageTotal } = usePaginatedReviews({
    reviews: data.reviews,
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
        reviews={paginatedReviews}
        dataLength={data.pagination.totalPages}
      />
      <PaginateControl pageTotal={pageTotal} />
    </>
  );
}
