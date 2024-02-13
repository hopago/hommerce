import { Suspense } from "react";

import { Outlet } from "react-router-dom";

import HomeLoadingPage from "../loading";
import { Navbar, NewsLetter, Footer } from "./_components";

import FixedSeenBooks from "../_components/FixedSeenBooks";

export default function GlobalLayout() {
  return (
    <>
      <Suspense fallback={<HomeLoadingPage />}>
        <NewsLetter />
        <Navbar />
        <Outlet />
        <Footer />
      </Suspense>
      <FixedSeenBooks />
    </>
  );
}
