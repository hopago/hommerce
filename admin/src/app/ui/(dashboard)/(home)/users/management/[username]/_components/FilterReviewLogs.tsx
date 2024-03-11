import { useFilterReviews } from "@/app/store/use-filter-reviews";

import { useCallback, useEffect, useState } from "react";

import {
  FILTER_REVIEW_INPUT,
  FILTER_REVIEW_SELECT,
} from "../../../../constants/classNames";

import styles from "./filter-review-logs.module.css";

import SelectList from "../../../../_components/SelectList";
import Input from "../../../../_components/Input";
import Button from "../../../../_components/Button";

export default function FilterReviewLogs() {
  const filterOptions: FilterOptions = [
    "검색 옵션",
    "리뷰 ID",
    "리뷰 내용",
    "책 제목",
  ];

  const { filter, setFilter, searchTerm, setSearchTerm, resetSearchState } =
    useFilterReviews();

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleReset = () => resetSearchState();

  useEffect(() => {
    setShow(false);
  }, [filter]);

  return (
    <div className={styles.filter}>
      <h1 className={styles.filterTitle}>검색 옵션 설정</h1>
      <div className={styles.filterOptions}>
        <SelectList
          selectList={filterOptions}
          currSelect={filter}
          handleItemClick={setFilter}
          className={FILTER_REVIEW_SELECT}
          show={show}
          setShow={setShow}
          handleShow={handleShow}
        />
        <Input
          type="text"
          value={searchTerm}
          placeholder="검색어를 입력해주세요."
          onChange={handleSearch}
          className={FILTER_REVIEW_INPUT}
        />
        <Button type="button" text="초기화" onClick={handleReset} />
      </div>
    </div>
  );
}
