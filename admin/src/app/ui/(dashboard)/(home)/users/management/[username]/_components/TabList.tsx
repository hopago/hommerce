"use client";

import { useManageUsers } from "@/app/store/use-manage-users";

import UsernameTab from "./UsernameTab";

import styles from "./tab-list.module.css";

export default function TabList() {
  const { usernames } = useManageUsers();

  if (!usernames) return null;

  return (
    <div className={styles.container}>
      <ul>
        {usernames?.map((name) => (
          <UsernameTab key={name} name={name} />
        ))}
      </ul>
    </div>
  );
}
