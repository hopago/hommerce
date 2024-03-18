import {
  MdDashboard,
  MdDesignServices,
  MdHelpCenter,
  MdOutlineSettings,
  MdOutlineSupervisorAccount,
  MdBook,
  MdPerson,
  MdDetails,
  MdReviews,
  MdShoppingBag,
  MdPointOfSale,
} from "react-icons/md";

import { IoMdHeart } from "react-icons/io";

import { MenuList } from "../types/menu-list";

// details 페이지 - DETAILS API CRUD 제공

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
        title: "도서 정보 및 리뷰",
        path: "/books",
        hasChildren: true,
        icon: <MdBook />,
        list: [
          {
            title: "저자",
            path: "/authors",
            icon: <MdPerson />,
          },
          {
            title: "도서 정보 수정",
            path: "/books/edit",
            icon: <MdDetails />,
          },
          {
            title: "리뷰",
            path: "/reviews",
            icon: <MdReviews />,
          },
        ],
      },
      {
        title: "서비스",
        path: "/services",
        icon: <MdDesignServices />,
        hasChildren: true,
        list: [
          {
            title: "장바구니",
            path: "/carts",
            icon: <MdShoppingBag />,
          },
          {
            title: "위시리스트",
            path: "/favor",
            icon: <IoMdHeart />,
          },
          {
            title: "포인트",
            path: "/point",
            icon: <MdPointOfSale />,
          },
        ],
      },
    ],
  },
  {
    title: "유저",
    list: [
      {
        title: "설정",
        path: `/setting/:userId`,
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
