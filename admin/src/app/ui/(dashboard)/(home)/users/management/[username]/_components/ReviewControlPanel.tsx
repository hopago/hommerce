import SelectList from "../../../../_components/SelectList";

import { REVIEW_SORT_SELECT } from "../../../../constants/classNames";

import { useFilterReviews } from "../hooks/use-filter-reviews";

import styles from "./review-log-list.module.css";

export type SortOption = "desc" | "asc";

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

// TODO: 타이틀 -> 선택된 아이템이 있다면 개수, 일괄 삭제 기능 제공

export default function ReviewControlPanel({
  dataLength,
}: ReviewControlPanelProps) {
  const { sort, handleSort, show, toggleShow, setShow } = useFilterReviews();

  // TODO: 선택된 항목, 일괄 삭제 컴포넌트

  return (
    <SortReview
      dataLength={dataLength}
      sort={sort}
      handleSort={handleSort}
      show={show}
      toggleShow={toggleShow}
      setShow={setShow}
    />
  );
}

const SortReview = ({
  dataLength,
  sort,
  handleSort,
  show,
  toggleShow,
  setShow,
}: SortReviewProps) => {
  const selectList: SortOption[] = ["desc", "asc"];

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
      />
    </div>
  );
};
