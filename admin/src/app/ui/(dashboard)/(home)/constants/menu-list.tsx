import {
  MdDashboard,
  MdDesignServices,
  MdHelpCenter,
  MdOutlineSettings,
  MdOutlineSupervisorAccount,
  MdShoppingBag,
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
        icon: <MdOutlineSupervisorAccount />,
      },
      {
        title: "상품",
        path: "/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "서비스",
        path: "/service",
        icon: <MdDesignServices />,
      },
    ],
  },
  {
    title: "유저",
    list: [
      {
        title: "설정",
        path: `/setting/:username`,
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
