import {
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdOutlineSettings,
  MdShoppingBag,
  MdSupervisedUserCircle,
} from "react-icons/md";

import { MenuList } from "../types/menu-list";

export const menuList: MenuList = [
  {
    title: "페이지",
    list: [
      {
        title: "대시보드",
        path: "/",
        icon: <MdDashboard />,
      },
      {
        title: "유저",
        path: "/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "상품",
        path: "/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "배송",
        path: "/ship",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "유저",
    list: [
      {
        title: "설정",
        path: `/:username/setting`,
        icon: <MdOutlineSettings />,
      },
      {
        title: "도움말",
        path: "/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
