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

  const isBooksDetailsLink = link.path === "/books/details";
  const booksDetailsPath = `/books/details`;

  const isActive = isUserSettingLink
    ? pathname.includes("setting")
    : isBooksDetailsLink
    ? pathname.includes("books/details")
    : getFirstPathname(pathname) === getFirstPathname(link.path);

  const linkPath = isUserSettingLink
    ? userSettingPath
    : isBooksDetailsLink
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
