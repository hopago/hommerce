import { useRouter } from "next/navigation";

import { useManageUsers } from "@/app/store/use-manage-users";

import { FaArrowLeft } from "react-icons/fa";

import styles from "./user-details.module.css";

import { Skeleton } from "@nextui-org/react";
import { cn } from "@/app/ui/lib/utils";

export default function UserDetailsHeader() {
  const router = useRouter();

  const { resetState } = useManageUsers();

  const handleNavigate = () => {
    resetState();
    router.push("/users");
  };

  return (
    <div className={styles.header}>
      <FaArrowLeft
        onClick={handleNavigate}
        size={16}
        className={styles.arrowLeft}
      />
      <h1 className={styles.title}>유저 상세</h1>
    </div>
  );
}

export const UserDetailsHeaderSkeleton = () => {
  return (
    <div className={styles.header}>
      <Skeleton className={cn("skeleton", styles.arrowLeftSkeleton)} />
      <Skeleton className={cn("skeleton", styles.titleSkeleton)} />
    </div>
  );
};
