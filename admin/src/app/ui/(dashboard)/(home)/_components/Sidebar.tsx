import Image from "next/image";

import { menuList } from "../constants/menu-list";

import styles from "./sidebar.module.css";

import SidebarMenuLink from "./SidebarMenuLink";
import LogoutButton from "./LogoutButton";

export default function Sidebar() {
  const temporaryUsername = "최호준";
  const temporaryUserRole = "관리자";

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.user}>
          <Image
            className={styles.userImage}
            src="/img_default-profile.png"
            width="48"
            height="48"
            alt="user-profile"
          />
          <div className={styles.userDetails}>
            <span className={styles.username}>{temporaryUsername}</span>
            <span className={styles.userRole}>{temporaryUserRole}</span>
          </div>
        </div>
        <ol className={styles.list}>
          {menuList.map((menu) => (
            <li key={menu.title} className={styles.listItem}>
              <span className={styles.listTitle}>{menu.title}</span>
              {menu.list.map((list) => (
                <SidebarMenuLink key={list.title} link={list} />
              ))}
            </li>
          ))}
        </ol>
        <LogoutButton />
      </div>
    </div>
  );
}
