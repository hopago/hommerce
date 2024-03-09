import Image from "next/image";

import styles from "./user-details.module.css";

type UserProfileProps = {
  imageUrl: string;
  username: string;
};

export default function UserProfile({ imageUrl, username }: UserProfileProps) {
  return (
    <div className={styles.userProfile}>
      <Image
        src={imageUrl}
        width={72}
        height={72}
        className={styles.userImage}
        alt="user-profile"
      />
      <span>{username}</span>
    </div>
  );
}
