import { Suspense, useEffect } from "react";

import { Outlet } from "react-router-dom";

import HomeLoadingPage from "../loading";
import { Navbar, NewsLetter, Footer } from "./_components";

import FixedSeenBooks from "../_components/FixedSeenBooks";

import { useRecoilValue } from "recoil";
import { seenModalState } from "../recoil/seen-modal";

export default function GlobalLayout() {
  const show = useRecoilValue(seenModalState);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

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
