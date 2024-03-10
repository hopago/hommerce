"use client";

import { NextUIProvider } from "@nextui-org/react";

type NextUiProviderProps = {
  children: React.ReactNode;
};

export default function UIProvider({ children }: NextUiProviderProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
