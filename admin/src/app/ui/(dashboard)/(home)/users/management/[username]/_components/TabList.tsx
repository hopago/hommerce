"use client";

import { useManageUsers } from "@/app/store/use-manage-users";

import UsernameTab from "./UsernameTab";

import styles from "./tab-list.module.css";

import { useEffect } from "react";

import { getUsernameByPath } from "../utils/getUsernameByPath";

import { useRouter } from "next/navigation";

export default function TabList() {
  const { usernames, onMutate, setActiveUser, resetState } = useManageUsers();

  const router = useRouter();

  if (!usernames) {
    alert("남은 관리 유저가 없습니다. 유저 페이지로 이동합니다.");

    resetState();

    router.push("/users");
  }

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
