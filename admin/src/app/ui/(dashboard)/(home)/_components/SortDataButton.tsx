import { SELECT_CLASS } from "../constants/classNames";

import { SortOption } from "../users/management/[username]/_components/ReviewControlPanel";

import styles from "../users/management/[username]/_components/review-log-list.module.css";

import SelectList from "./SelectList";

import { Skeleton } from "@nextui-org/react";
import { cn } from "@/app/ui/lib/utils";

type SortReviewProps = {
  dataLength: number;
  sort: SortOption;
  handleSort: (sort: SortOption) => void;
  show: boolean;
  toggleShow: () => void;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
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
      <h1 className={styles.title}>{dataLength.toLocaleString()}개의 도서</h1>
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

export default SortReview;

export const SortDataButtonSkeleton = () => (
  <div className={styles.reviewControlPanel}>
    <Skeleton className={cn("skeleton", styles.titleSkeleton)} />
    <Skeleton className={cn("skeleton", styles.selectSkeleton)} />
  </div>
);
