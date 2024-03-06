"use client";

import { useEffect } from "react";

import { menuList } from "../constants/menu-list";
import { MenuLink } from "../types/menu-list";

import styles from "./sidebar.module.css";

import SidebarMenuLink from "./SidebarMenuLink";
import LogoutButton from "./LogoutButton";
import MouseOverMenuList from "./MouseOverMenuList";
import SidebarUserProfile from "./SidebarUserProfile";

type ShortcutUser = {
  id: string;
  username: string;
  imgUrl: string;
  grade: UserGrade;
};

export default function Sidebar() {
  const temporaryUser: ShortcutUser = {
    id: "clerk_id",
    username: "최호준",
    imgUrl: "/img_default-profile.png",
    grade: "관리자",
  };

  useEffect(() => {
    // TODO: GET Initial User Info
  }, []);

  const renderSidebarMenuLink = (list: MenuLink) => {
    if (list.hasChildren) {
      return (
        <MouseOverMenuList
          key={list.title}
          link={list}
          userId={temporaryUser.id}
        />
      );
    } else {
      return (
        <SidebarMenuLink
          key={list.title}
          link={list}
          userId={temporaryUser.id}
        />
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <SidebarUserProfile
          imgUrl={temporaryUser.imgUrl}
          grade={temporaryUser.grade}
          username={temporaryUser.username}
        />
        <ol className={styles.list}>
          {menuList.map((menu) => (
            <li key={menu.title} className={styles.listItem}>
              <span className={styles.listTitle}>{menu.title}</span>
              {menu.list.map(renderSidebarMenuLink)}
            </li>
          ))}
        </ol>
        <LogoutButton />
      </div>
    </div>
  );
}
