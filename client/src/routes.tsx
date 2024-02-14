import GlobalLayout from "./pages/_layout";

import Index from "./pages";
import LangIndex from "./pages/[lang]";
import DetailsIndex from "./pages/details/[bookId]";

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
      // {
      //   path: "/category/:lang",
      //   element: <CategoryIndex />,
      //   index: true,
      // }
    ],
  },
];

export const pages = [
  { route: "/" },
  { route: "/:lang" },
  { route: "/details/:bookId" },
  { route: "/category/:lang" },
];
