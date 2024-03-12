import SelectList from "../../../../_components/SelectList";
import Button from "../../../../_components/Button";

import { REVIEW_SORT_SELECT } from "../../../../constants/classNames";

import { useFilterReviews } from "../hooks/use-filter-reviews";
import { useSelectReview } from "@/app/store/use-select-review";
import { useUserReviewMutation } from "../services/use-user-review-mutation";

import styles from "./review-log-list.module.css";

export type SortOption = "최신순" | "오래된순";

type SortReviewProps = {
  dataLength: number;
  sort: SortOption;
  handleSort: (sort: SortOption) => void;
  show: boolean;
  toggleShow: () => void;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

type ReviewControlPanelProps = {
  dataLength: number;
};

export default function ReviewControlPanel({
  dataLength,
}: ReviewControlPanelProps) {
  const { sort, handleSort, show, toggleShow, setShow } = useFilterReviews();
  const { ids } = useSelectReview();

  const renderPanel = ids.length ? (
    <DeleteReview ids={ids} />
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

const DeleteReview = ({ ids }: { ids: string[] }) => {
  const { mutate, isPending } = useUserReviewMutation();

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

const SortReview = ({
  dataLength,
  sort,
  handleSort,
  show,
  toggleShow,
  setShow,
}: SortReviewProps) => {
  const selectList: SortOption[] = ["최신순", "오래된순"];

  return (
    <div className={styles.reviewControlPanel}>
      <h1 className={styles.title}>{dataLength.toLocaleString()}개의 리뷰</h1>
      <SelectList
        currSelect={sort}
        handleItemClick={handleSort}
        selectList={selectList}
        show={show}
        setShow={setShow}
        handleShow={toggleShow}
        className={REVIEW_SORT_SELECT}
        backgroundColor="#414B5D"
      />
    </div>
  );
};
