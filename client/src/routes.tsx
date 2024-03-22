import GlobalLayout from "./pages/_layout";

import Index from "./pages";
import LangIndex from "./pages/[lang]";
import DetailsIndex from "./pages/details/[bookId]";
import LoginIndex from "./pages/login";
import SigninIndex from "./pages/join";
import SigninSuccessIndex from "./pages/join/success";
import SearchIndex from "./pages/search";
import SigninFailureIndex from "./pages/join/failure";
import CartIndex from "./pages/cart";

export const routes = [
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        path: "/",
        element: <Index />,
        index: true,
      },
      {
        path: "/:lang",
        element: <LangIndex />,
        index: true,
      },
      {
        path: "/details/:bookId",
        element: <DetailsIndex />,
        index: true,
      },
    ],
  },
  {
    path: "/cart",
    element: <CartIndex />,
    index: true,
  },
  {
    path: "/search",
    element: <SearchIndex />,
    index: true,
  },
  {
    path: "/login",
    element: <LoginIndex />,
    index: true,
  },
  {
    path: "/join",
    element: <SigninIndex />,
    index: true,
  },
  {
    path: "/join/success",
    element: <SigninSuccessIndex />,
    index: true,
  },
  {
    path: "/join/failure",
    element: <SigninFailureIndex />,
    index: true,
  },
];

export const pages = [
  { route: "/" },
  { route: "/cart" },
  { route: "/search" },
  { route: "/:lang" },
  { route: "/details/:bookId" },
  { route: "/category/:lang/:category" },
  { route: "/login" },
  { route: "/signin" },
  { route: "/join/success" },
  { route: "/join/failure" },
];
