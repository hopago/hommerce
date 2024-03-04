"use client";

import styles from "./sidebar.module.css";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { MenuLink } from "../types/menu-list";

type SidebarMenuLinkProps = {
  link: MenuLink;
};

export default function SidebarMenuLink({ link }: SidebarMenuLinkProps) {
  const username = "hopago";

  const pathname = usePathname();

  const isUserSettingLink = link.path === "/setting/:username";
  const userSettingPath = `/setting/${username}`;
  const isActive = isUserSettingLink
    ? pathname.includes("setting")
    : pathname === link.path;

  const linkPath = isUserSettingLink ? userSettingPath : link.path;
  const linkStyle = `${styles.sidebarMenuContainer} ${
    isActive ? styles.active : ""
  }`;

  return (
    <Link href={linkPath} className={linkStyle}>
      {link.icon}
      {link.title}
    </Link>
  );
}
