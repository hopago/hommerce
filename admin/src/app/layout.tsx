import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./ui/globals.css";

import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hommerce 관리자 대시보드",
  description:
    "Hommerce API를 테스트하고 관리자 기능을 사용할 수 있는 어드민 페이지입니다. 이 대시보드를 통해 사용자 관리, 서비스 모니터링, API 테스트 등의 관리자 전용 기능에 접근할 수 있습니다.",
  keywords:
    "Hommerce, 관리자, 대시보드, API 테스트, 사용자 관리, 서비스 모니터링",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
