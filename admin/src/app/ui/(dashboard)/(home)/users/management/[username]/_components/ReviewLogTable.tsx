import { Suspense } from "react";

import ReviewControlPanel from "./ReviewControlPanel";
import ReviewRow, { ReviewRowSkeleton } from "./ReviewRow";
import ReviewSelectAllCheckBox from "./ReviewSelectAllCheckBox";

import styles from "./review-log-list.module.css";

type ReviewLogListProps = {
  reviews: ReviewLogs;
  dataLength: number;
};

export default function ReviewLogTable({
  reviews,
  dataLength,
}: ReviewLogListProps) {
  // TODO: No-content 컴포넌트 UI

  const ids = reviews.map((review) => review._id);

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <ReviewControlPanel dataLength={dataLength} />
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
              <Suspense fallback={<ReviewRowSkeleton />}>
                <ReviewRow key={review._id} review={review} />
              </Suspense>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
