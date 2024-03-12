import { Suspense } from "react";

import ReviewControlPanel from "./ReviewControlPanel";
import { ReviewRowAsync, ReviewRowSkeleton } from "./ReviewRow";
import ReviewSelectAllCheckBox from "./ReviewSelectAllCheckBox";

import styles from "./review-log-list.module.css";

type ReviewLogListProps = {
  reviews: ReviewLogs;
  dataLength: number;
  isLoading: boolean;
};

export default function ReviewLogTable({
  reviews,
  dataLength,
  isLoading,
}: ReviewLogListProps) {
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
              <Suspense key={review._id} fallback={<ReviewRowSkeleton />}>
                <ReviewRowAsync review={review} isLoading={isLoading} />
              </Suspense>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
