"use client";

import styles from "./navbar.module.css";

import { getCurrPathname } from "../utils/getCurrPathname";

import { MdNotifications, MdOutlineChat, MdPublic } from "react-icons/md";

import Search from "./Search";

import { useNavigateForm } from "../hooks/use-search-form";

export default function Navbar() {
  const currPathname = getCurrPathname();
  if (!currPathname) return null;

  const { searchTerm, handleChange, handleSubmit, searchResults } =
    useNavigateForm({
      type: currPathname,
    });

  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <span className={styles.title}>{currPathname}</span>
        <div className={styles.menu}>
          <Search
            placeholder="전체 검색하기"
            searchTerm={searchTerm}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            searchResults={searchResults}
          />
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
