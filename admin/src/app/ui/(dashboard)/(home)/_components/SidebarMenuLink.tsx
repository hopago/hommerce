"use client";

import styles from "./sidebar-menu-link.module.css";

import { MenuLink } from "../types/menu-list";

import Link from "next/link";

import { usePathname } from "next/navigation";

type SidebarMenuLinkProps = {
  link: MenuLink;
};

export default function SidebarMenuLink({ link }: SidebarMenuLinkProps) {
  const username = "hopago";

  const pathname = usePathname();

  const isUserSettingLink = link.path === "/:username/setting";
  const userSettingPath = `/${username}/setting`;
  const isActive = isUserSettingLink
    ? pathname.includes("setting")
    : pathname === link.path;

  const linkPath = isUserSettingLink ? userSettingPath : link.path;
  const linkStyle = `${styles.container} ${isActive ? styles.active : ""}`;

  return (
    <Link href={linkPath} className={linkStyle}>
      {link.icon}
      {link.title}
    </Link>
  );
}
