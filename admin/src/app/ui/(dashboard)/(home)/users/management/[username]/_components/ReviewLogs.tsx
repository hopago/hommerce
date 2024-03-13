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
import { creatorFilterReviews } from "@/app/store/use-filter-reviews";

import { PAGE_THRESHOLD } from "../../../../constants/pagination";

import { NoContent } from "./NoContentTable";

export default function ReviewLogs({ userId }: { userId: string }) {
  const { filter, searchTerm, sort } = creatorFilterReviews();
  const { currentPage, handleMoveToFirstPage } = useCreatorPagination();

  const {
    data,
    error,
    isError,
    isLoading,
    refetch,
    isRefetching,
    isRefetchError,
  } = useQuery<ReviewData>({
    queryKey: [QueryKeys.USER_REVIEW, currentPage, filter, searchTerm],
    queryFn: () =>
      fetchUserReviews({ pageNum: currentPage, filter, searchTerm, userId }),
    staleTime: daysToMs(1),
    gcTime: daysToMs(3),
  });

  if (!data || !data.reviews || !data.pagination)
    return (
      <NoContent
        refetch={refetch}
        error={error}
        isRefetching={isRefetching}
        isRefetchError={isRefetchError}
      />
    );

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
        reviews={paginatedData as ReviewLogs}
        dataLength={pageTotal * PAGE_THRESHOLD}
      />
      <PaginateControl pageTotal={pageTotal} />
    </>
  );
}
