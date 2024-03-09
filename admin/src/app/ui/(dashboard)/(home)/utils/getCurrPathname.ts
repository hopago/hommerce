import { usePathname } from "next/navigation";

import { MenuListTitle } from "../types/menu-list";
import { getFirstPathname } from "./getFirstPathname";

const pathnameToMenuListTitle: Record<string, MenuListTitle | null> = {
  "/": "대시보드",
  "/users": "유저",
  "/books": "도서 정보 및 리뷰",
  "/books/details": "세부정보",
  "/authors": "저자",
  "/reviews": "리뷰",
  "/services": "서비스",
  "/carts": "장바구니",
  "/favor": "위시리스트",
  "/point": "포인트",
  "/setting": "설정",
  "/help": "도움말",
};

export function getCurrPathname(): MenuListTitle | null {
  const pathname = usePathname();

  let firstPathname = getFirstPathname(pathname);

  firstPathname = "/" + firstPathname;

  return pathnameToMenuListTitle[firstPathname] || null;
}
