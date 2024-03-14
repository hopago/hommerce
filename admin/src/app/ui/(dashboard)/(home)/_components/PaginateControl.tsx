"use client"

import { useCreatorPagination } from "@/app/store/use-pagination";

import PrevPage from "./PrevPage";
import MoveToFirstPage from "./MoveToFirstPage";
import SetPage from "./SetPage";
import MoveToLastPage from "./MoveToLastPage";
import NextPage from "./NextPage";

import styles from "./pagination.module.css";

import { useEffect } from "react";
import { PAGE_THRESHOLD } from "../constants/pagination";

type PaginateControlProps = {
  pageTotal: number;
};

export default function PaginateControl({ pageTotal }: PaginateControlProps) {
  const {
    currentPage,
    handlePrevPage,
    handleNextPage,
    handleSetPage,
    handleMoveToFirstPage,
    handleMoveToLastPage,
  } = useCreatorPagination();

  const prevPageDisabled = currentPage === 1;
  const nextPageDisabled = currentPage === pageTotal;

  useEffect(() => {
    handleSetPage(1);
  }, []);

  return (
    <div className={styles.container}>
      <PrevPage onPrevPage={handlePrevPage} disabled={prevPageDisabled} />
      {currentPage > PAGE_THRESHOLD && (
        <MoveToFirstPage handleMoveToFirstPage={handleMoveToFirstPage} />
      )}
      <SetPage
        currPage={currentPage}
        total={pageTotal}
        onSetPage={handleSetPage}
      />
      {pageTotal - PAGE_THRESHOLD > currentPage && (
        <MoveToLastPage
          pageTotal={pageTotal}
          handleMoveToLastPage={handleMoveToLastPage}
        />
      )}
      <NextPage
        onNextPage={handleNextPage}
        disabled={nextPageDisabled}
        pageTotal={pageTotal}
      />
    </div>
  );
}
