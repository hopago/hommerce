type UserDetailsInfoProps = {
  grade: string;
  username: string;
  email: string;
  status: string;
  createdAt: Date;
};

import ChangePasswordForm from "./ChangePasswordForm";
import UpdateUserForm from "./UpdateUserForm";

import styles from "./user-details.module.css";

export default function UserDetailsInfo({
  grade,
  username,
  email,
  status,
  createdAt,
}: UserDetailsInfoProps) {
  return (
    <div className={styles.userDetailsInfo}>
      <h1 className={styles.title}>회원 정보</h1>
      <UpdateUserForm
        title="유저명"
        uiType="default"
        inputName="username"
        value=""
        onChange={() => {}}
        onSubmit={() => {}}
        isLoading={false}
      />
      <ChangePasswordForm />
    </div>
  );
}
