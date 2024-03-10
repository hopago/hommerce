"use client";

import { useRouter } from "next/navigation";

import { cn } from "@/app/ui/lib/utils";

import styles from "./tab-list.module.css";

import { getUsernameByPath } from "../utils/getUsernameByPath";

import { MdClose } from "react-icons/md";

import { useManageUsers } from "@/app/store/use-manage-users";

type UsernameTabProps = {
  name: string;
  isSingleTab: boolean;
  currPathname: string;
};

export default function UsernameTab({
  name,
  isSingleTab,
  currPathname,
}: UsernameTabProps) {
  const isActive = currPathname === name;

  const { removeUsername } = useManageUsers();

  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/users/management/${name}`);
  };

  const handleRemove = () => {
    removeUsername(name);
  };

  return (
    <li className={styles.tab}>
      <button
        className={cn(
          styles.tabWrap,
          isActive && styles.active,
          isSingleTab && styles.singleTab
        )}
        onClick={handleNavigate}
      >
        <span>{name}</span>
        <MdClose size={16} className={styles.close} onClick={handleRemove} />
      </button>
    </li>
  );
}
