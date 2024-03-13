import { Suspense } from "react";

import { PointRowAsync } from "./PointRow";

import { TableRowSkeleton } from "./TableRowSkeleton";

import styles from "./review-log-list.module.css";

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
            {pointLogs.map((point, i) => (
              <Suspense
                key={`${point._id}-${i}`}
                fallback={<TableRowSkeleton />}
              >
                <PointRowAsync point={point} isLoading={isLoading} />
              </Suspense>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
