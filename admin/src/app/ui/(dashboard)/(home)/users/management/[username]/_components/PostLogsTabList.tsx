import { Dispatch, SetStateAction, useState } from "react";

import { STYLE_NONE_BUTTON } from "../../../../constants/classNames";
import { logTabList } from "../constants/log-tab-list";

import { LogTabList } from "../types/log-tab-list";

import styles from "./post-logs-tab-list.module.css";

type PostLogsTabListProps = {
  currTab: LogTabList;
  setCurrTab: Dispatch<SetStateAction<LogTabList>>;
};

export default function PostLogsTabList({
  currTab,
  setCurrTab,
}: PostLogsTabListProps) {
  const [show, setShow] = useState(false);

  const onClick = (tab: LogTabList) => {
    setCurrTab(tab);
  };

  return (
    <div className={styles.tabList}>
      <div className={styles.tabListWrap}>
        <h1 className={styles.tabListTitle}>고객 참여 활동</h1>
        <span>{currTab}</span>
        {show && (
          <ul className={styles.selectList}>
            {logTabList.map((tab) => (
              <li key={tab} className={styles.selectItem}>
                <button
                  className={STYLE_NONE_BUTTON}
                  onClick={() => onClick(tab)}
                >
                  <span className={styles.selectText}>{currTab}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
