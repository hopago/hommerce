import FilterReviewLogs from "./FilterReviewLogs";
import ReviewLogTable from "./ReviewLogTable";
import PaginateControl from "../../../../_components/PaginateControl";
import { NoContent } from "./NoContentTable";

import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/app/lib/getQueryClient";
import { daysToMs } from "../../../../utils/daysToMs";
import { fetchUserReviews } from "../services/fetchUserReviews";

import { useHandleError } from "../hooks/use-handle-error";
import { useCreatorPagination } from "@/app/store/use-pagination";
import { creatorFilterReviews } from "@/app/store/use-filter";

import { DataTableSkeleton } from "../../../../books/_components/BooksSearchResults";

import { useEffect, useState } from "react";

export default function ReviewLogs({ userId }: { userId: string }) {
  const { filter, searchTerm, sort, enabled } = creatorFilterReviews();
  const { currentPage } = useCreatorPagination();

  const {
    data,
    error,
    isError,
    isLoading,
    refetch,
    isRefetching,
    isRefetchError,
  } = useQuery<ReviewData>({
    queryKey: [
      QueryKeys.USER_REVIEW,
      userId,
      sort,
      filter,
      searchTerm,
      currentPage,
    ],
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

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  if (isLoading) return <DataTableSkeleton />;

  if (!data?.reviews.length)
    return (
      <NoContent
        queryKey={[QueryKeys.USER_REVIEW, userId]}
        refetch={refetch}
        error={error}
        isRefetching={isRefetching}
        isRefetchError={isRefetchError}
      />
    );

  if (data.reviews.length) {
    return (
      <>
        <FilterReviewLogs />
        <ReviewLogTable
          userId={userId}
          isLoading={isLoading}
          reviews={data.reviews as ReviewLogs}
          dataLength={data?.pagination.totalReviews!}
        />
        <PaginateControl pageTotal={data?.pagination.totalPages!} />
      </>
    );
  }
}
