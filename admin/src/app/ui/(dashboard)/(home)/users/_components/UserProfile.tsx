import styles from "./users-table.module.css";

import Image from "next/image";

type UserProfileProps = {
  imageUrl: string;
  username: string;
};

export default function UserProfile({ imageUrl, username }: UserProfileProps) {
  return (
    <div className={styles.user}>
      <Image
        src={imageUrl ?? "/img_default-profile.png"}
        width={40}
        height={40}
        alt="user-profile"
        className={styles.userImg}
      />
      <span>{username}</span>
    </div>
  );
}
