import { cn } from "@/app/ui/lib/utils";

import {
  FILTER_REVIEW_SELECT,
  POST_LOGS_SELECT,
  STYLE_NONE_BUTTON,
} from "../constants/classNames";

import styles from "./select-list.module.css";

import { forwardRef } from "react";

import { LogTabList } from "../users/management/[username]/types/log-tab-list";

type SelectItemProps = {
  currSelect: LogTabList | FilterOption;
  selectList: LogTabList[] | FilterOptions;
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
          className === POST_LOGS_SELECT && styles.postLogs,
          className === FILTER_REVIEW_SELECT && styles.filterReview
        )}
      >
        {selectList.map((list, i) => {
          if (currSelect !== list)
            return (
              <li key={`${list}-${i}`} className={styles.selectItem}>
                <button
                  className={STYLE_NONE_BUTTON}
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
