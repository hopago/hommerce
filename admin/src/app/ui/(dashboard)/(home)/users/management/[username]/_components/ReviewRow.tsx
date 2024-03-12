import { Skeleton } from "@nextui-org/react";

import ReviewActions, { ReviewActionsSkeleton } from "./ReviewActions";
import ReviewSelectedCheckBox, {
  ReviewSelectCheckBoxSkeleton,
} from "./ReviewSelectedCheckBox";

import styles from "./review-log-list.module.css";
import { cn } from "@/app/ui/lib/utils";

type ReviewRowProps = {
  review: ReviewLog;
};

export default function ReviewRow({ review }: ReviewRowProps) {
  return (
    <tr>
      <ReviewSelectedCheckBox id={review._id} />
      <td>{review._id}</td>
      <td>{review.bookTitle}</td>
      <td>{review.desc}</td>
      <ReviewActions id={review._id} />
    </tr>
  );
}

export const ReviewRowSkeleton = () => {
  return (
    <tr>
      <ReviewSelectCheckBoxSkeleton />
      <td>
        <Skeleton className={cn("skeleton", styles.td)} />
      </td>
      <td>
        <Skeleton className={cn("skeleton", styles.td)} />
      </td>
      <td>
        <Skeleton className={cn("skeleton", styles.td)} />
      </td>
      <ReviewActionsSkeleton />
    </tr>
  );
};
