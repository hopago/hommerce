"use client"

import Link from "next/link";

import { MenuLink } from "../types/menu-list";

import styles from "./sidebar.module.css";

import { MdArrowRight } from "react-icons/md";

import MouseOverMenuItem from "./MouseOverMenuItem";

import { createLinkPathAndStyle } from "../utils/createLinkPathAndStyle";
import { cn } from "@/app/ui/lib/utils";
import { useHoverMenu } from "../hooks/use-hover-menu";

type MouseOverMenuList = {
  link: MenuLink;
  userId?: string;
};

export default function MouseOverMenuList({ link, userId }: MouseOverMenuList) {
  const { linkPath, linkStyle } = createLinkPathAndStyle({ link, userId });

  const { onMouseEnter, onMouseLeave, show } = useHoverMenu();

  const renderSidebarMenuLink = (list: MenuLink) => {
    if (list.hasChildren) {
      return <MouseOverMenuList key={list.title} link={list} />;
    } else {
      return <MouseOverMenuItem key={list.title} link={list} />;
    }
  };

  return (
    <Link
      href={linkPath}
      className={cn(linkStyle, styles.hoverMenuList)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.menuTitle}>
        {link.icon}
        <span>{link.title}</span>
      </div>
      <MdArrowRight />
      {show && (
        <ol className={styles.hoverList}>
          {link.list?.map(renderSidebarMenuLink)}
        </ol>
      )}
    </Link>
  );
}
