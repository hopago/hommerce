import { cn } from "@/app/ui/lib/utils";

import { BUTTON_CLASS, SELECT_CLASS } from "../constants/classNames";

import styles from "./select-list.module.css";

import { forwardRef } from "react";

import { LogTabList } from "../users/management/[username]/types/log-tab-list";
import { SortOption } from "../users/management/[username]/_components/ReviewControlPanel";
import { PointFilterOption } from "../users/management/[username]/_components/FilterPointLogs";
import { BookFilterOption } from "../books/_components/FilterBooks";

type SelectItemProps = {
  currSelect:
    | LogTabList
    | FilterOption
    | SortOption
    | PointFilterOption
    | BookFilterOption
    | BookSubCategory;
  selectList:
    | LogTabList[]
    | FilterOptions
    | SortOption[]
    | PointFilterOption[]
    | BookFilterOption[]
    | BookSubCategoryList;
  handleItemClick: (param: any) => void;
  className?: string;
};

const SelectItem = forwardRef<HTMLUListElement, SelectItemProps>(
  ({ selectList, handleItemClick, currSelect, className }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn(
          styles.selectList,
          className === SELECT_CLASS.POST_LOGS_SELECT && styles.postLogs,
          className === SELECT_CLASS.FILTER_REVIEW_SELECT &&
            styles.filterReview,
          className === SELECT_CLASS.REVIEW_SORT_SELECT && styles.reviewSort,
          className === SELECT_CLASS.BOOK_EDIT && styles.bookEdit
        )}
      >
        {selectList.map((list, i) => {
          if (currSelect !== list)
            return (
              <li key={`${list}-${i}`} className={styles.selectItem}>
                <button
                  type="button"
                  className={BUTTON_CLASS.STYLE_NONE}
                  onClick={() => handleItemClick(list)}
                >
                  <span className={styles.selectText}>{list}</span>
                </button>
              </li>
            );
        })}
      </ul>
    );
  }
);

export default SelectItem;
