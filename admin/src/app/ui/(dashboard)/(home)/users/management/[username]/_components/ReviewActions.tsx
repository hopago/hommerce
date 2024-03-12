import { useRef, useState } from "react";

import { useRouter } from "next/navigation";

import styles from "./review-log-list.module.css";

import { MdClose, MdMoreVert } from "react-icons/md";

import Button from "../../../../_components/Button";

import { REVIEW_ACTION_BUTTON } from "../../../../constants/classNames";

import { useOutsideClick } from "../../../hooks/use-outside-click";
import { useUserReviewMutation } from "../services/use-user-review-mutation";

import { Skeleton } from "@nextui-org/react";
import { cn } from "@/app/ui/lib/utils";

type ReviewActionsProps = {
  id: string;
};

export default function ReviewActions({ id }: ReviewActionsProps) {
  const containerRef = useRef<HTMLTableDataCellElement>(null);

  const [show, setShow] = useState(false);

  const toggleClick = () => {
    setShow((prev) => !prev);
  };

  useOutsideClick<HTMLTableDataCellElement>({ ref: containerRef, setShow });

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
          <Navigate id={id} />
          <Delete id={id} />
        </div>
      )}
    </td>
  );
}

function Navigate({ id }: { id: string }) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/review/${id}`);
  };

  return (
    <Button
      type="button"
      text="상세 보기"
      onClick={onClick}
      ariaLabel="상세 보기"
      className={REVIEW_ACTION_BUTTON}
    />
  );
}

function Delete({ id }: { id: string }) {
  const { mutate, isPending } = useUserReviewMutation();

  const onClick = () => {
    mutate(id);
  };

  return (
    <Button
      type="button"
      text="리뷰 삭제"
      onClick={onClick}
      ariaLabel="리뷰 삭제"
      className={REVIEW_ACTION_BUTTON}
      backgroundColor="#BF444A"
      disabled={isPending}
    />
  );
}

export const ReviewActionsSkeleton = () => {
  return (
    <td>
      <Skeleton className={cn("skeleton", styles.tdIcon)} />
    </td>
  );
};
