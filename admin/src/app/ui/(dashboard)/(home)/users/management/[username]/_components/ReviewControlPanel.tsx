import SelectList from "../../../../_components/SelectList";
import Button from "../../../../_components/Button";

import { SELECT_CLASS } from "../../../../constants/classNames";

import { useSelectReview } from "@/app/store/use-select-review";
import { useUserReviewMutation } from "../services/use-user-review-mutation";

import styles from "./review-log-list.module.css";

import { creatorFilterReviews } from "@/app/store/use-filter";
import { useFilter } from "../../../../hooks/use-filter";

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
  const props = creatorFilterReviews();
  const { sort, handleSort, show, toggleShow, setShow } = useFilter(props);
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
        className={SELECT_CLASS.REVIEW_SORT_SELECT}
        backgroundColor="#414B5D"
      />
    </div>
  );
};
