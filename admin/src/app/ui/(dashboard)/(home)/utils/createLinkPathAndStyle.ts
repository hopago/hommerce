import { usePathname } from "next/navigation";

import { MenuLink } from "../types/menu-list";

import styles from "../_components/sidebar.module.css";

import { getFirstPathname } from "./getFirstPathname";

type CreateLinkPathAndStyleParams = {
  link: MenuLink;
  userId?: string;
};

export const createLinkPathAndStyle = ({
  link,
  userId,
}: CreateLinkPathAndStyleParams) => {
  const pathname = usePathname();

  const isUserSettingLink = link.path === "/setting/:userId";
  const userSettingPath = `/setting/${userId}`;

  const isBooksEditLink = link.path === "/books/edit";
  const booksDetailsPath = `/books/edit`;

  const isActive = isUserSettingLink
    ? pathname.includes("setting")
    : isBooksEditLink
    ? pathname.includes("books/edit")
    : getFirstPathname(pathname) === getFirstPathname(link.path);

  const linkPath = isUserSettingLink
    ? userSettingPath
    : isBooksEditLink
    ? booksDetailsPath
    : link.path;

  const linkStyle = `${styles.sidebarMenuContainer} ${
    isActive ? styles.active : ""
  }`;

  return {
    linkPath,
    linkStyle,
  };
};
