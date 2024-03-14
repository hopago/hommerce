import { usePaginatedData } from "../../../hooks/use-paginated-data";
import { useHandleError } from "../hooks/use-handle-error";

import PaginateControl from "../../../../_components/PaginateControl";
import FilterPointLogs from "./FilterPointLogs";
import PointLogTable from "./PointLogTable";
import UserPoint from "./UserPoint";
import { NoContent } from "./NoContentTable";

import styles from "./user-point-logs.module.css";

import {
  creatorFilterPoints,
} from "@/app/store/use-filter";
import { useCreatorPagination } from "@/app/store/use-pagination";

import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/app/lib/getQueryClient";
import { daysToMs } from "../../../../utils/daysToMs";
import { fetchUserPointLog } from "../services/fetchUserPointLog";

type UserPointLogsProps = {
  userId: string;
};

export default function UserPointLogs({ userId }: UserPointLogsProps) {
  const { sort, filter, searchTerm, enabled } = creatorFilterPoints();
  const { handleMoveToFirstPage, currentPage } = useCreatorPagination();

  const {
    data,
    error,
    isError,
    isLoading,
    refetch,
    isRefetching,
    isRefetchError,
  } = useQuery<PointData>({
    queryKey: [QueryKeys.USER_POINT_LOG, currentPage, filter, searchTerm, sort],
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

  if (!data || !data.pointLogs || !data.pagination)
    return (
      <div className={styles.pointLogs}>
        <NoContent
          text="포인트 기록이 아직 없네요."
          refetch={refetch}
          error={error}
          isRefetching={isRefetching}
          isRefetchError={isRefetchError}
          currentPage={currentPage}
          filter={filter}
          searchTerm={searchTerm}
        />
      </div>
    );

  const { paginatedData, pageTotal } = usePaginatedData({
    data: data.pointLogs,
    sort,
    handleMoveToFirstPage,
    currentPage,
  });

  return (
    <div className={styles.pointLogs}>
      <h1>포인트 기록</h1>
      <UserPoint userId={userId} />
      <FilterPointLogs />
      <PointLogTable
        pointLogs={paginatedData as PointLogs}
        isLoading={isLoading}
        userId={userId}
      />
      <PaginateControl pageTotal={pageTotal} />
    </div>
  );
}
