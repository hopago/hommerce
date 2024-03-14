import { useRef } from "react";

import styles from "./review-log-list.module.css";

import { MdClose, MdMoreVert } from "react-icons/md";

import Button from "../../../../_components/Button";

import { BUTTON_CLASS } from "../../../../constants/classNames";

import { useUserReviewMutation } from "../services/use-user-review-mutation";

import { Skeleton } from "@nextui-org/react";
import { cn } from "@/app/ui/lib/utils";

import { useToggle } from "../../../hooks/use-controlled-toggle";

import { Navigate } from "./NavigateButton";

type ReviewActionsProps = {
  id: string;
  userId: string;
};

export default function ReviewActions({ id, userId }: ReviewActionsProps) {
  const containerRef = useRef<HTMLTableDataCellElement>(null);

  const { show, toggleClick } = useToggle(containerRef);

  return (
    <td className={styles.reviewActions} ref={containerRef}>
      {!show ? (
        <MdMoreVert
          onClick={toggleClick}
          className={styles.moreVert}
          size={21}
        />
      ) : (
        <MdClose onClick={toggleClick} className={styles.close} />
      )}
      {show && (
        <div className={styles.reviewActionsButtons}>
          <Navigate path={`/reviews/${id}`} text="상세보기" />
          <Delete userId={userId} id={id} />
        </div>
      )}
    </td>
  );
}

function Delete({ id, userId }: { id: string; userId: string; }) {
  const { mutate, isPending } = useUserReviewMutation({ userId });

  const onClick = () => {
    mutate(id);
  };

  return (
    <Button
      type="button"
      text="리뷰 삭제"
      onClick={onClick}
      ariaLabel="리뷰 삭제"
      className={BUTTON_CLASS.REVIEW_ACTION}
      backgroundColor="#BF444A"
      disabled={isPending}
    />
  );
}

export const ReviewActionsSkeleton = () => {
  return (
    <td>
      <Skeleton className={cn("skeleton", styles.tdIconSkeleton)} />
    </td>
  );
};
