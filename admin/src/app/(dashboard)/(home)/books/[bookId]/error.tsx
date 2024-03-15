"use client";

import { HttpError } from "@/app/fetcher/error";

type BookPageErrorProps = {
  reset: () => void;
  error: { message: string };
};

export default function BookPageError({
  error: { message },
  reset,
}: BookPageErrorProps) {
  return <div>{message}</div>;
}
