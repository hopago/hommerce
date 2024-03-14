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
import { creatorFilterReviews } from "@/app/store/use-filter";

import { PAGE_THRESHOLD } from "../../../../constants/pagination";

import { NoContent } from "./NoContentTable";

export default function ReviewLogs({ userId }: { userId: string }) {
  const { filter, searchTerm, sort, enabled } = creatorFilterReviews();
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
    queryKey: [QueryKeys.USER_REVIEW, userId],
    queryFn: () =>
      fetchUserReviews({
        pageNum: currentPage,
        filter,
        searchTerm,
        userId,
        sort,
      }),
    staleTime: daysToMs(1),
    gcTime: daysToMs(3),
    enabled,
  });

  useHandleError({ error, isError, fieldName: "리뷰" });

  if (!data || !data.reviews || !data.pagination)
    return (
      <NoContent
        queryKey={[QueryKeys.USER_REVIEW, userId]}
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

  return (
    <>
      <FilterReviewLogs />
      <ReviewLogTable
        userId={userId}
        isLoading={isLoading}
        reviews={paginatedData as ReviewLogs}
        dataLength={pageTotal * PAGE_THRESHOLD}
      />
      <PaginateControl pageTotal={pageTotal} />
    </>
  );
}
