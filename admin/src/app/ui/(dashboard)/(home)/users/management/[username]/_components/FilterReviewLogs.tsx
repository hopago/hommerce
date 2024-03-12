import {
  FILTER_REVIEW_INPUT,
  FILTER_REVIEW_SELECT,
} from "../../../../constants/classNames";

import styles from "./filter-review-logs.module.css";

import SelectList from "../../../../_components/SelectList";
import Input from "../../../../_components/Input";
import Button from "../../../../_components/Button";

import { useFilterReviews } from "../hooks/use-filter-reviews";

import { Skeleton } from "@nextui-org/react";
import { cn } from "@/app/ui/lib/utils";

export default function FilterReviewLogs() {
  const filterOptions: FilterOptions = [
    "검색 옵션",
    "리뷰 ID",
    "리뷰 내용",
    "책 제목",
  ];

  // 클라이언트 검색 상태 관리
  const {
    show,
    toggleShow,
    handleSearch,
    handleReset,
    clientFilter,
    setClientFilter,
    setShow,
    clientSearch,
    handleSubmit,
  } = useFilterReviews();

  return (
    <div className={styles.filter}>
      <h1 className={styles.filterTitle}>검색 옵션 설정</h1>
      <form className={styles.filterOptions} onSubmit={handleSubmit}>
        <SelectList
          selectList={filterOptions}
          currSelect={clientFilter}
          handleItemClick={setClientFilter}
          className={FILTER_REVIEW_SELECT}
          show={show}
          setShow={setShow}
          handleShow={toggleShow}
        />
        <Input
          type="text"
          value={clientSearch}
          placeholder="검색어를 입력해주세요."
          onChange={handleSearch}
          className={FILTER_REVIEW_INPUT}
        />
        <Button type="button" text="초기화" onClick={handleReset} />
      </form>
    </div>
  );
}

export const FilterReviewSkeleton = () => {
  return (
    <div className={styles.filter}>
      <Skeleton className={cn("skeleton", styles.titleSkeleton)} />
      <div className={styles.filterOptions}>
        <Skeleton className={cn("skeleton", styles.select)} />
        <Skeleton className={cn("skeleton", styles.input)} />
        <Skeleton className={cn("skeleton", styles.button)} />
      </div>
    </div>
  );
};
