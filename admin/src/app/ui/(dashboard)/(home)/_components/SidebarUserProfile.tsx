import Image from "next/image";

import styles from "./sidebar.module.css";

type SidebarUserProfileProps = {
  username: string;
  grade: UserGrade;
  imgUrl: string;
};

export default function SidebarUserProfile({
  username,
  grade,
  imgUrl,
}: SidebarUserProfileProps) {
  return (
    <div className={styles.user}>
      <Image
        className={styles.userImage}
        src={imgUrl}
        width="48"
        height="48"
        alt="user-profile"
      />
      <div className={styles.userDetails}>
        <span className={styles.username}>{username}</span>
        <span className={styles.userRole}>{grade}</span>
      </div>
    </div>
  );
}
