import { usePaginatedData } from "../../../hooks/use-paginated-data";

import PaginateControl from "../../../../_components/PaginateControl";
import FilterPointLogs from "./FilterPointLogs";
import PointLogTable from "./PointLogTable";
import UserPoint from "./UserPoint";

import styles from "./user-point-logs.module.css";

import { creatorFilterPoints } from "@/app/store/use-filter-points";
import { useCreatorPagination } from "@/app/store/use-pagination";
import { PAGE_THRESHOLD } from "../../../../constants/pagination";

type UserPointLogsProps = {
  userId: string;
};

export default function UserPointLogs({ userId }: UserPointLogsProps) {
  const temporaryPointLog: PointLog = {
    _id: "mongo_id_1",
    userId: "clerk_id_2",
    pointId: "mongo_id_3",
    desc: "저는 일단 이 문제에 대해서 생각하지 않는 사람들, 디지털 치매 등을 읽었고, 넷플릭스 다큐멘터리 소셜 딜레마도 추천합니다.",
    amount: 800,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const temporaryPointLogs: PointLogs = [...Array.from({ length: 22 })].map(
    (_, i) => {
      const data = temporaryPointLog;

      return data;
    }
  );

  const { sort, filter, searchTerm, enabled } = creatorFilterPoints();

  const { handleMoveToFirstPage, currentPage } = useCreatorPagination();

  const { paginatedData, pageTotal } = usePaginatedData({
    data: temporaryPointLogs,
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
        dataLength={pageTotal * PAGE_THRESHOLD}
        isLoading={false}
        userId={userId}
      />
      <PaginateControl pageTotal={pageTotal} />
    </div>
  );
}
