import { useTabList } from "../hooks/use-tab-list";

import FAQLogs from "./FAQLogs";
import PostLogsTabList from "./PostLogsTabList";
import ReviewLogs from "./ReviewLogs";

import styles from "./user-logs.module.css";

export default function UserPostLogs() {
  const { currTab, setCurrTab } = useTabList();

  const renderContents = currTab === "리뷰" ? <ReviewLogs /> : <FAQLogs />;

  return (
    <div className={styles.postLogs}>
      <div className={styles.postLogsWrap}>
        <h1 className={styles.postLogsTitle}>고객 참여 활동</h1>
        <PostLogsTabList currTab={currTab} setCurrTab={setCurrTab} />
        {renderContents}
      </div>
    </div>
  );
}
