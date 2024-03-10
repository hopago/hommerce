"use client";

import { useManageUsers } from "@/app/store/use-manage-users";

import UsernameTab from "./UsernameTab";

import styles from "./tab-list.module.css";

import { useEffect } from "react";

import { getUsernameByPath } from "../utils/getUsernameByPath";

export default function TabList() {
  const { usernames, onMutate, setActiveUser } = useManageUsers();
  if (!usernames) return null;

  const currPathname = getUsernameByPath();

  const isSingleTab = usernames.length === 1;

  useEffect(() => {
    setActiveUser(currPathname);
  }, [currPathname]);

  useEffect(() => {
    const isMutated = usernames.some((name) => name === currPathname);

    if (isMutated) {
      onMutate(currPathname);
    }
  }, [currPathname]);

  return (
    <div className={styles.container}>
      <ul>
        {usernames?.map((name) => (
          <UsernameTab
            key={name}
            name={name}
            isSingleTab={isSingleTab}
            currPathname={currPathname}
          />
        ))}
      </ul>
    </div>
  );
}
