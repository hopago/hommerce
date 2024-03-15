import { useHandleError } from "../hooks/use-handle-error";

import PaginateControl from "../../../../_components/PaginateControl";
import FilterPointLogs from "./FilterPointLogs";
import PointLogTable from "./PointLogTable";
import UserPoint from "./UserPoint";
import { NoContent } from "./NoContentTable";

import styles from "./user-point-logs.module.css";

import { creatorFilterPoints } from "@/app/store/use-filter";
import { useCreatorPagination } from "@/app/store/use-pagination";

import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/app/lib/getQueryClient";
import { daysToMs } from "../../../../utils/daysToMs";
import { fetchUserPointLog } from "../services/fetchUserPointLog";

import { DataTableSkeleton } from "../../../../books/_components/BooksSearchResults";

import { useEffect, useState } from "react";

type UserPointLogsProps = {
  userId: string;
};

export default function UserPointLogs({ userId }: UserPointLogsProps) {
  const { sort, filter, searchTerm, enabled } = creatorFilterPoints();
  const { currentPage } = useCreatorPagination();

  const {
    data,
    error,
    isError,
    isLoading,
    refetch,
    isRefetching,
    isRefetchError,
  } = useQuery<PointData>({
    queryKey: [
      QueryKeys.USER_POINT_LOG,
      userId,
      sort,
      filter,
      searchTerm,
      currentPage,
    ],
    queryFn: () =>
      fetchUserPointLog({
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

  useHandleError({ error, isError, fieldName: "포인트" });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  if (isLoading) return <DataTableSkeleton />;

  if (!data?.pointLogs.length)
    return (
      <div className={styles.pointLogs}>
        <NoContent
          text="포인트 기록이 아직 없네요."
          refetch={refetch}
          error={error}
          isRefetching={isRefetching}
          isRefetchError={isRefetchError}
          queryKey={[QueryKeys.USER_POINT_LOG, userId]}
        />
      </div>
    );

  if (data?.pointLogs.length) {
    return (
      <div className={styles.pointLogs}>
        <h1>포인트 기록</h1>
        <UserPoint userId={userId} />
        <FilterPointLogs />
        <PointLogTable
          pointLogs={data.pointLogs as PointLogs}
          isLoading={isLoading}
          userId={userId}
        />
        <PaginateControl pageTotal={data?.pagination.totalPoints!} />
      </div>
    );
  }
}
