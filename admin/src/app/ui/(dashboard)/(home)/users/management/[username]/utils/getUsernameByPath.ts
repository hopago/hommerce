import { usePathname } from "next/navigation";

export const getUsernameByPath = () => {
  const pathname = usePathname();

  return pathname.split("/")[3];
};
