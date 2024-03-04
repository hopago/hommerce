import { usePathname } from "next/navigation";

export function getCurrPathname() {
  const pathname = usePathname();
  const currPathname = pathname.split("/")[1] as string | null;

  if (currPathname === "") {
    return "대시보드";
  }

  if (currPathname === "users") {
    return "유저";
  }

  if (currPathname === "products") {
    return "상품";
  }

  if (currPathname === "setting") {
    return "설정";
  }

  if (currPathname === "help") {
    return "도움말";
  }

  return null;
}
