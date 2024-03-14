import { Suspense } from "react";

import ReviewControlPanel from "./ReviewControlPanel";
import { ReviewRowAsync } from "./ReviewRow";
import ReviewSelectAllCheckBox from "./ReviewSelectAllCheckBox";

import styles from "./review-log-list.module.css";

import { TableRowSkeleton } from "./TableRowSkeleton";

type ReviewLogTableProps = {
  reviews: ReviewLogs;
  dataLength: number;
  isLoading: boolean;
  userId: string;
};

export default function ReviewLogTable({
  reviews,
  dataLength,
  isLoading,
  userId,
}: ReviewLogTableProps) {
  const ids = reviews.map((review) => review._id);

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <ReviewControlPanel dataLength={dataLength} userId={userId} />
        <table>
          <thead>
            <tr>
              <ReviewSelectAllCheckBox ids={ids} />
              <td>리뷰 ID</td>
              <td>책 제목</td>
              <td>리뷰 내용</td>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <Suspense key={review._id} fallback={<TableRowSkeleton />}>
                <ReviewRowAsync
                  review={review}
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
