import { ReactElement } from "react";

type MenuTitle = "페이지" | "유저";

export type MenuListTitle =
  | "대시보드"
  | "유저"
  | "상품"
  | "서비스"
  | "설정"
  | "도움말";

type MenuListPath =
  | "/"
  | "/users"
  | "/products"
  | "/service"
  | "/setting/:username"
  | "/help";

export type MenuPathname =
  | ""
  | "users"
  | "products"
  | "service"
  | "setting"
  | "help";

type MenuListIcon = ReactElement<any, any>;

export type MenuLink = {
  title: MenuListTitle;
  path: MenuListPath;
  icon: MenuListIcon;
};

type MenuItem = {
  title: MenuTitle;
  list: MenuLink[];
};

export type MenuList = MenuItem[];
