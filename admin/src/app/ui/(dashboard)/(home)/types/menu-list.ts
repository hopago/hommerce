import { ReactElement } from "react";

type MenuTitle = "페이지" | "유저";

export type MenuListTitle =
  | "대시보드"
  | "유저"
  | "도서 정보 및 리뷰"
  | "저자"
  | "도서 정보 수정"
  | "리뷰"
  | "서비스"
  | "장바구니"
  | "위시리스트"
  | "포인트"
  | "설정"
  | "도움말";

type MenuListPath =
  | "/"
  | "/users"
  | "/books"
  | "/authors"
  | "/books/edit"
  | "/reviews"
  | "/services"
  | "/carts"
  | "/favor"
  | "/point"
  | "/setting/:userId"
  | "/help";

export type MenuPathname =
  | ""
  | "users"
  | "books"
  | "service"
  | "setting"
  | "help";

type MenuListIcon = ReactElement<any, any>;

export type MenuLink = {
  title: MenuListTitle;
  path: MenuListPath;
  icon: MenuListIcon;
  hasChildren?: boolean;
  list?: MenuLink[];
};

type MenuItem = {
  title: MenuTitle;
  list: MenuLink[];
};

export type MenuList = MenuItem[];
