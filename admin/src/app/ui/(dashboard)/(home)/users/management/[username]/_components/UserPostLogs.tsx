import { Skeleton } from "@nextui-org/react";
import { useTabList } from "../hooks/use-tab-list";

import FAQLogs from "./FAQLogs";
import PostLogsTabList from "./PostLogsTabList";
import ReviewLogs from "./ReviewLogs";

import styles from "./user-logs.module.css";
import { cn } from "@/app/ui/lib/utils";

export default function UserPostLogs() {
  const { currTab, setCurrTab } = useTabList();

  const renderContents = currTab === "리뷰" ? <ReviewLogs /> : <FAQLogs />;

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

export const UserPostLogsSkeleton = () => {
  return (
    <div className={styles.postLogs}>
      <div className={styles.postLogsWrap}>
        <Skeleton className={cn("skeleton", styles.titleSkeleton)} />
        <div className={styles.setTab}>
          <Skeleton className={cn("skeleton", styles.currTabSkeleton)} />
          {/* TODO: 스켈레톤 CSS */}
        </div>
      </div>
    </div>
  );
};
