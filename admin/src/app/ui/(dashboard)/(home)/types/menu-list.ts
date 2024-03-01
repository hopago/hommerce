import { ReactElement } from "react";

type MenuTitle = "페이지" | "유저";

type MenuListTitle = "대시보드" | "유저" | "상품" | "배송" | "설정" | "도움말";

type MenuListPath =
  | "/"
  | "/users"
  | "/products"
  | "/ship"
  | "/:username/setting"
  | "/help";

export type MenuPathname = "" | "users" | "products" | "setting" | "help";

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
