import { useTabList } from "../hooks/use-tab-list";

import FAQLogs from "./FAQLogs";
import PostLogsTabList from "./PostLogsTabList";
import ReviewLogs from "./ReviewLogs";

import styles from "./user-logs.module.css";

export default function UserPostLogs({ userId }: { userId: string }) {
  const { currTab, setCurrTab } = useTabList();

  const renderContents = currTab === "리뷰" ? <ReviewLogs userId={userId} /> : <FAQLogs />;

  return (
    <div className={styles.postLogs}>
      <div className={styles.postLogsWrap}>
        <h1>고객 참여 활동</h1>
        <div className={styles.setTab}>
          <h1 className={styles.currTab}>{currTab}</h1>
          <PostLogsTabList currTab={currTab} setCurrTab={setCurrTab} />
        </div>
        {renderContents}
      </div>
    </div>
  );
}