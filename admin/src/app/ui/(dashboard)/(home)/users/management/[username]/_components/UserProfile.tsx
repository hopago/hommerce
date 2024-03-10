import Image from "next/image";

import styles from "./user-details.module.css";

import { Skeleton } from "@nextui-org/react";
import { cn } from "@/app/ui/lib/utils";

type UserProfileProps = {
  imageUrl: string;
  username: string;
};

export default function UserProfile({ imageUrl, username }: UserProfileProps) {
  return (
    <div className={styles.userProfile}>
      <Image
        src={imageUrl}
        width={84}
        height={84}
        className={styles.userImage}
        alt="user-profile"
      />
      <span>{username}</span>
    </div>
  );
}

export const UserProfileSkeleton = () => {
  return (
    <div className={styles.userProfile}>
      <Skeleton className={cn("skeleton", styles.userImageSkeleton)} />
      <Skeleton className={cn("skeleton", styles.usernameSkeleton)} />
    </div>
  );
};
