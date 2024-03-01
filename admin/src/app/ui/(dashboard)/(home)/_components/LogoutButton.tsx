"use client";

import styles from "./sidebar.module.css";

import { MdLogout } from "react-icons/md";

export default function LogoutButton() {
  const onClick = () => {};

  return (
    <button className={styles.logout} onClick={onClick}>
      <MdLogout />
      <span>로그아웃</span>
    </button>
  );
}
