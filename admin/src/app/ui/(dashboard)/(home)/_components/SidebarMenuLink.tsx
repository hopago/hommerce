"use client";

import Link from "next/link";

import { MenuLink } from "../types/menu-list";

import { createLinkPathAndStyle } from "../utils/createLinkPathAndStyle";

type SidebarMenuLinkProps = {
  link: MenuLink;
  userId: string;
};

export default function SidebarMenuLink({
  link,
  userId,
}: SidebarMenuLinkProps) {
  const { linkPath, linkStyle } = createLinkPathAndStyle({ link, userId });

  return (
    <Link href={linkPath} className={linkStyle}>
      {link.icon}
      {link.title}
    </Link>
  );
}
