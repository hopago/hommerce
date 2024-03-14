import Button from "../../../../_components/Button";

import { useSelectReview } from "@/app/store/use-select-review";
import { useUserReviewMutation } from "../services/use-user-review-mutation";

import styles from "./review-log-list.module.css";

import { creatorFilterReviews } from "@/app/store/use-filter";
import { useFilter } from "../../../../hooks/use-filter";
import SortReview from "../../../../_components/SortDataButton";

export type SortOption = "최신순" | "오래된순";

type DeleteReviewProps = { ids: string[]; userId: string };

type ReviewControlPanelProps = {
  dataLength: number;
  userId: string;
};

export default function ReviewControlPanel({
  dataLength,
  userId,
}: ReviewControlPanelProps) {
  const props = creatorFilterReviews();
  const { sort, handleSort, show, toggleShow, setShow } = useFilter(props);
  const { ids } = useSelectReview();

  const renderPanel = ids.length ? (
    <DeleteReview ids={ids} userId={userId} />
  ) : (
    <SortReview
      dataLength={dataLength}
      sort={sort}
      handleSort={handleSort}
      show={show}
      toggleShow={toggleShow}
      setShow={setShow}
    />
  );

  return renderPanel;
}

const DeleteReview = ({ ids, userId }: DeleteReviewProps) => {
  const { mutate, isPending } = useUserReviewMutation({ userId });

  const onClick = () => {
    mutate(ids);
  };

  return (
    <div className={styles.reviewControlPanel}>
      <h1 className={styles.title}>{ids.length}개 선택됨</h1>
      <Button
        type="button"
        text="일괄삭제"
        backgroundColor="#BF444A"
        onClick={onClick}
        disabled={isPending}
      />
    </div>
  );
};
