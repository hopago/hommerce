import UserPointLogs from "./UserPointLogs";
import UserPostLogs from "./UserPostLogs";
import UserRegistrationDate from "./UserRegistrationDate";
import UserSessionLogs from "./UserSessionLogs";

import styles from "./user-logs.module.css";

type UserLogsProps = {
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export default function UserLogs({
  createdAt,
  updatedAt,
  userId,
}: UserLogsProps) {
  return (
    <div className={styles.userLogs}>
      <div className={styles.userLogsWrap}>
        <h1>활동 정보</h1>
        <UserRegistrationDate createdAt={createdAt} updatedAt={updatedAt} />
        <UserSessionLogs userId={userId} />
        <UserPostLogs />
        <UserPointLogs />
      </div>
    </div>
  );
}

export const UserLogsSkeleton = () => {
  return (
    <div>
      로딩 중...
    </div>
  )
}