import { Suspense } from "react";
import HomeLoadingPage from "../loading";
import { Outlet } from "react-router-dom";

export default function GlobalLayout() {
  return (
    <div>
      <Suspense fallback={<HomeLoadingPage />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
