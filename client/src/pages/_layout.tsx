import { Suspense } from "react";

import { Outlet } from "react-router-dom";

import HomeLoadingPage from "../loading";
import { Navbar, NewsLetter, Footer } from "./_components";

export default function GlobalLayout() {
  return (
    <div>
      <Suspense fallback={<HomeLoadingPage />}>
        <NewsLetter />
        <Navbar />
        <Outlet />
        <Footer />
      </Suspense>
    </div>
  );
}
