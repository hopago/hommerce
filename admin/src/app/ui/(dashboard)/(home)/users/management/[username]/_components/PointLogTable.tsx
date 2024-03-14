import { Suspense } from "react";

import { PointRowAsync } from "./PointRow";

import { TableRowSkeleton } from "./TableRowSkeleton";

import styles from "./review-log-list.module.css";

type PointLogTableProps = {
  pointLogs: PointLogs;
  isLoading: boolean;
  userId: string;
};

export default function PointLogTable({
  pointLogs,
  isLoading,
  userId,
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
                <PointRowAsync
                  point={point}
                  isLoading={isLoading}
                  userId={userId}
                />
              </Suspense>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
