import { creatorFilterBooks } from "@/app/store/use-filter";

import Input from "../../_components/Input";
import SelectList from "../../_components/SelectList";
import Button from "../../_components/Button";

import { INPUT_CLASS, SELECT_CLASS } from "../../constants/classNames";

import { useFilter } from "../../hooks/use-filter";

import styles from "../../users/management/[username]/_components/filter-review-logs.module.css";

import { Skeleton } from "@nextui-org/react";
import { cn } from "@/app/ui/lib/utils";

export type BookFilterOption = "통합검색" | "제목" | "저자";

export default function FilterBooks() {
  const filterOptions: BookFilterOption[] = ["통합검색", "제목", "저자"];

  const props = creatorFilterBooks();

  const {
    show,
    toggleShow,
    handleSearch,
    handleReset,
    filter,
    setFilter,
    setShow,
    searchTerm,
    handleSubmit,
  } = useFilter<BookFilterOption>(props);

  return (
    <div className={styles.filter}>
      <h1 className={styles.filterTitle}>검색 옵션 설정</h1>
      <form className={styles.filterOptions} onSubmit={handleSubmit}>
        <SelectList
          selectList={filterOptions}
          currSelect={filter}
          handleItemClick={setFilter}
          className={SELECT_CLASS.FILTER_REVIEW_SELECT}
          show={show}
          setShow={setShow}
          handleShow={toggleShow}
        />
        <Input
          type="text"
          value={searchTerm}
          placeholder="검색어를 입력해주세요."
          onChange={handleSearch}
          className={INPUT_CLASS.FILTER_REVIEW_INPUT}
        />
        <Button type="button" text="초기화" onClick={handleReset} />
      </form>
    </div>
  );
}

export const FilterItemsSkeleton = () => (
  <div className={styles.filter}>
    <Skeleton className={cn("skeleton", styles.titleSkeleton)} />
    <div className={styles.filterOptions}>
      <Skeleton className={cn("skeleton", styles.selectSkeleton)} />
      <Skeleton className={cn("skeleton", styles.inputSkeleton)} />
      <Skeleton className={cn("skeleton", styles.buttonSkeleton)} />
    </div>
  </div>
);
