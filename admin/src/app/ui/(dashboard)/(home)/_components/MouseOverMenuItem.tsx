"use client";

import Link from "next/link";

import { MenuLink } from "../types/menu-list";

import styles from "./sidebar.module.css";

import { createLinkPathAndStyle } from "../utils/createLinkPathAndStyle";
import { cn } from "@/app/ui/lib/utils";

type MouseOverMenuItemProps = {
  link: MenuLink;
};

export default function MouseOverMenuItem({ link }: MouseOverMenuItemProps) {
  const { linkPath, linkStyle } = createLinkPathAndStyle({ link });

  return (
    <Link href={linkPath} className={cn(linkStyle, styles.hoverMenuItem)}>
      <div className={styles.menuTitle}>
        {link.icon}
        {link.title}
      </div>
    </Link>
  );
}
