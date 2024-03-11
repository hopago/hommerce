import { Skeleton } from "@nextui-org/react";

import { formatDate } from "../../../../utils/formatDate";

import styles from "./user-logs.module.css";
import { cn } from "@/app/ui/lib/utils";

type UserRegistrationDateProps = {
  createdAt: Date;
  updatedAt: Date;
};

export default function UserRegistrationDate({
  createdAt,
  updatedAt,
}: UserRegistrationDateProps) {
  return (
    <div className={styles.registrationDate}>
      <div className={styles.registrationDateWrap}>
        <h3 className={styles.registrationTitle}>가입일</h3>
        <span className={styles.registrationDesc}>{formatDate(createdAt)}</span>
      </div>
      <div className={styles.registrationDateWrap}>
        <h3 className={styles.registrationTitle}>수정일</h3>
        <span className={styles.registrationDesc}>{formatDate(updatedAt)}</span>
      </div>
    </div>
  );
}

export const UserRegistrationDateSkeleton = () => {
  return (
    <div className={styles.registrationDate}>
      <div className={styles.registrationDateWrap}>
        <Skeleton
          className={cn("skeleton", styles.registrationTitleSkeleton)}
        />
        <Skeleton className={cn("skeleton", styles.registrationDescSkeleton)} />
      </div>
      <div className={styles.registrationDateWrap}>
        <Skeleton
          className={cn("skeleton", styles.registrationTitleSkeleton)}
        />
        <Skeleton className={cn("skeleton", styles.registrationDescSkeleton)} />
      </div>
    </div>
  );
};
