import { Skeleton } from "@nextui-org/react";

import UserPointLogs from "./UserPointLogs";
import UserPostLogs from "./UserPostLogs";
import UserRegistrationDate, {
  UserRegistrationDateSkeleton,
} from "./UserRegistrationDate";
import UserSessionLogs, { UserSessionLogsSkeleton } from "./UserSessionLogs";

import styles from "./user-logs.module.css";
import { cn } from "@/app/ui/lib/utils";

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
        <UserPostLogs userId={userId} />
        <UserPointLogs userId={userId} />
      </div>
    </div>
  );
}

export const UserLogsSkeleton = () => {
  return (
    <div className={styles.userLogs}>
      <div className={styles.userLogsWrap}>
        <Skeleton className={cn("skeleton", styles.titleSkeleton)} />
        <UserRegistrationDateSkeleton />
        <UserSessionLogsSkeleton />
      </div>
    </div>
  );
};
