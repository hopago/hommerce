import { Suspense } from "react";

import styles from "./point-log-table.module.css";

import { PointRowAsync } from "./PointRow";
import { ReviewRowSkeleton } from "./ReviewRow";

type PointLogTableProps = {
  pointLogs: PointLogs;
  dataLength: number;
  isLoading: boolean;
};

export default function PointLogTable({
  pointLogs,
  dataLength,
  isLoading,
}: PointLogTableProps) {
  const ids = pointLogs.map((point) => point._id);

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <table>
          <thead>
            <tr>
              <td>일자</td>
              <td>사유</td>
              <td>증감</td>
            </tr>
          </thead>
          <tbody>
            {pointLogs.map((point) => (
              <Suspense key={point._id} fallback={<ReviewRowSkeleton />}>
                <PointRowAsync point={point} isLoading={isLoading} />
              </Suspense>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
