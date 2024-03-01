import { MenuPathname } from "../types/menu-list";

export function getCurrPathname(link: MenuPathname) {
  if (link === "") {
    return "대시보드";
  }

  if (link === "users") {
    return "유저";
  }

  if (link === "products") {
    return "상품";
  }

  if (link === "setting") {
    return "설정";
  }

  if (link === "help") {
    return "도움말";
  }
}
