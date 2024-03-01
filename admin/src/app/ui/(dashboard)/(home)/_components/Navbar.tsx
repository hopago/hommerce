"use client";

import styles from "./navbar.module.css";

import { getCurrPathname } from "../utils/getCurrPathname";

import { MenuPathname } from "../types/menu-list";

import { usePathname } from "next/navigation";

import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

export default function Navbar() {
  const pathname = usePathname();
  let currPathname = pathname.split("/").pop();
  currPathname = getCurrPathname(currPathname as MenuPathname);

  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.title}>{currPathname}</span>
        <div className={styles.menu}>
          <div className={styles.search}>
            <MdSearch />
            <input
              type="text"
              placeholder="검색하기"
              className={styles.input}
            />
          </div>
          <div className={styles.icons}>
            <MdOutlineChat className={styles.icon} size={20} />
            <MdNotifications className={styles.icon} size={20} />
            <MdPublic className={styles.icon} size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
}
