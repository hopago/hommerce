import { Skeleton } from "@nextui-org/react";

import React from "react";

import ReviewActions, { ReviewActionsSkeleton } from "./ReviewActions";
import ReviewSelectedCheckBox, {
  ReviewSelectCheckBoxSkeleton,
} from "./ReviewSelectedCheckBox";

import styles from "./review-log-list.module.css";
import { cn } from "@/app/ui/lib/utils";

type ReviewRowProps = {
  review: ReviewLog;
  isLoading: boolean;
};

export const ReviewRowAsync = React.lazy(() => import("./ReviewRow"));

export default function ReviewRow({ review, isLoading }: ReviewRowProps) {
  if (isLoading) return <ReviewRowSkeleton />;

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
        <Skeleton className={cn("skeleton", styles.tdSkeleton)} />
      </td>
      <td>
        <Skeleton className={cn("skeleton", styles.tdSkeleton)} />
      </td>
      <td>
        <Skeleton className={cn("skeleton", styles.tdSkeleton)} />
      </td>
      <ReviewActionsSkeleton />
    </tr>
  );
};
