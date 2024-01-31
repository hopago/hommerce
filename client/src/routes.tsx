import Index from "./pages";
import GlobalLayout from "./pages/_layout";

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
      //   {
      //     path: '/cart', element: <CartIndex />, index: true
      //   },
      //   {
      //     path: '/payment', element: <PaymentIndex />, index: true
      //   },
      //   {
      //     path: '/products', element: <ProductsIndex />, index: true
      //   },
      //   {
      //     path: '/products/:id', element: <ProductsId />
      //   },
    ],
  },
];

export const pages = [
  { route: "/" },
  //   { route: '/cart' },
  //   { route: '/payment' },
  //   { route: '/products' },
  //   { route: '/products/:id' }
];
