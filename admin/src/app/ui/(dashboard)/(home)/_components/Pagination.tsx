"use client";

import { useEffect } from "react";

import { getPageTotal } from "../utils/getPageTotal";

import PaginateControl from "./PaginateControl";

export default function Pagination() {
  const docsLength = 12345;

  const pageTotal = getPageTotal(docsLength);

  useEffect(() => {
    // TODO: GET User Docs Length
  }, []);

  return <PaginateControl pageTotal={pageTotal} />;
}
