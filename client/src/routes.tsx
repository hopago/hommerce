import GlobalLayout from "./pages/_layout";

import Index from "./pages";
import LangIndex from "./pages/[lang]";
import DetailsIndex from "./pages/details/[bookId]";
import LoginIndex from "./pages/login";
import SigninIndex from "./pages/join";

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
    path: "/login",
    element: <LoginIndex />,
    index: true,
  },
  {
    path: "signin",
    element: <SigninIndex />,
    index: true,
  },
];

export const pages = [
  { route: "/" },
  { route: "/:lang" },
  { route: "/details/:bookId" },
  { route: "/category/:lang" },
  { route: "/login" },
  { route: "/signin" },
];
