import PaginateControl from "../../../../_components/PaginateControl";
import { usePaginatedData } from "../../../hooks/use-paginated-data";

import styles from "./user-point-logs.module.css";

type UserPointLogsProps = {
  userId: string;
};

export default function UserPointLogs({ userId }: UserPointLogsProps) {


  return (
    <div className={styles.pointLogs}>
      <div className={styles.postLogsWrap}>
        <h1>포인트 기록</h1>
        <FilterPointLogs />
        <PointLogTable />
        <PaginateControl />
      </div>
    </div>
  );
}
