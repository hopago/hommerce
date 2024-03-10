type UserDetailsInfoProps = {
  grade: string;
  username: string;
  email: string;
  status: string;
  createdAt: Date;
};

import { Skeleton } from "@nextui-org/react";

import ChangePasswordForm from "./ChangePasswordForm";
import UpdateUserForm, { UpdateUserFormSkeleton } from "./UpdateUserForm";

import styles from "./user-details.module.css";
import { cn } from "@/app/ui/lib/utils";

export default function UserDetailsInfo({
  grade,
  username,
  email,
  status,
  createdAt,
}: UserDetailsInfoProps) {
  return (
    <div className={styles.userDetailsInfo}>
      <h1 className={styles.userDetailsTitle}>회원 정보</h1>
      <UpdateUserForm
        title="유저명"
        uiType="default"
        inputName="username"
        value=""
        onChange={() => {}}
        onSubmit={() => {}}
        isLoading={false}
      />
      <UpdateUserForm
        title="이메일"
        uiType="default"
        inputName="email"
        value=""
        onChange={() => {}}
        onSubmit={() => {}}
        isLoading={false}
      />
      <ChangePasswordForm />
      <UpdateUserForm
        title="회원 등급"
        uiType="select"
        inputName="grade"
        value={grade}
        onChange={() => {}}
        onSubmit={() => {}}
        isLoading={false}
      />
      <UpdateUserForm
        title="회원 상태"
        uiType="select"
        inputName="status"
        value={status}
        onChange={() => {}}
        onSubmit={() => {}}
        isLoading={false}
      />
    </div>
  );
}

export const UserDetailsInfoSkeleton = () => {
  return (
    <div className={styles.userDetailsInfo}>
      <Skeleton className={cn("skeleton", styles.userDetailsTitleSkeleton)} />
      <UpdateUserFormSkeleton />
      <UpdateUserFormSkeleton />
      <UpdateUserFormSkeleton />
    </div>
  );
};
