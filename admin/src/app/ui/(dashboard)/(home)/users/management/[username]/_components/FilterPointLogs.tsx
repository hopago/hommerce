import { creatorFilterPoints } from "@/app/store/use-filter";

import Button from "../../../../_components/Button";
import Input from "../../../../_components/Input";
import SelectList from "../../../../_components/SelectList";

import { INPUT_CLASS, SELECT_CLASS } from "../../../../constants/classNames";

import styles from "./filter-review-logs.module.css";

import { useFilter } from "../../../../hooks/use-filter";

export type PointFilterOption =
  | "검색 옵션"
  | "포인트 아이디"
  | "지급 내용"
  | "지급량";

export default function FilterPointLogs() {
  const filterOptions: PointFilterOption[] = [
    "검색 옵션",
    "포인트 아이디",
    "지급 내용",
    "지급량",
  ];

  const props = creatorFilterPoints();

  const {
    filter,
    setFilter,
    show,
    setShow,
    toggleShow,
    searchTerm,
    handleSearch,
    handleSubmit,
  } = useFilter<PointFilterOption>(props);

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
        <Button type="button" text="초기화" />
      </form>
    </div>
  );
}
