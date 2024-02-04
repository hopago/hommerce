type LinkItem = {
  title:
    | "유튜브구독"
    | "베스트"
    | "신상품"
    | "이벤트"
    | "사은품"
    | "Picks"
    | "CASTing"
    | "HOMMERCE-ONLY";
  color: "#4dac27" | "#000000";
  href: string;
};

type LinkList = LinkItem[];

export const linkList: LinkList = [
  {
    title: "유튜브구독",
    color: "#4dac27",
    href: "/",
  },
  {
    title: "베스트",
    color: "#4dac27",
    href: "/bestseller",
  },
  {
    title: "신상품",
    color: "#000000",
    href: "/new",
  },
  {
    title: "이벤트",
    color: "#000000",
    href: "/",
  },
  {
    title: "사은품",
    color: "#000000",
    href: "/",
  },
  {
    title: "Picks",
    color: "#000000",
    href: "/picks",
  },
  {
    title: "CASTing",
    color: "#000000",
    href: "/",
  },
  {
    title: "HOMMERCE-ONLY",
    color: "#000000",
    href: "/",
  },
];
