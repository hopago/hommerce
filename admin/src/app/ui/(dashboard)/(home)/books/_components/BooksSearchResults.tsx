"use client";

import PaginateControl from "../../_components/PaginateControl";
import BookTable, { TableSkeleton } from "./BookTable";
import FilterBooks, { FilterItemsSkeleton } from "./FilterBooks";

import styles from "./book-search.module.css";

import { creatorFilterBooks } from "@/app/store/use-filter";
import { useCreatorPagination } from "@/app/store/use-pagination";
import { useScrollRef } from "../../hooks/use-scroll-ref";

import { QueryKeys, getQueryClient } from "@/app/lib/getQueryClient";
import { useQuery } from "@tanstack/react-query";
import { fetchBookBySearchTerm } from "../services/fetchBookBySearchTerm";
import { daysToMs } from "../../utils/daysToMs";
import { useHandleError } from "../../users/management/[username]/hooks/use-handle-error";

import { NoContent } from "../../users/management/[username]/_components/NoContentTable";

import { Skeleton } from "@nextui-org/react";
import { cn } from "@/app/ui/lib/utils";

import { useEffect } from "react";

export default function BooksSearchResults() {
  const { sort, filter, searchTerm, enabled, setEnabled } =
    creatorFilterBooks();
  const { currentPage } = useCreatorPagination();

  const queryClient = getQueryClient();

  const {
    data,
    error,
    isLoading,
    isSuccess,
    isError,
    refetch,
    isRefetching,
    isRefetchError,
  } = useQuery<BookData>({
    queryKey: [QueryKeys.BOOK, currentPage],
    queryFn: () =>
      fetchBookBySearchTerm({
        pageNum: currentPage,
        filter,
        searchTerm,
        sort,
      }),
    staleTime: daysToMs(1),
    gcTime: daysToMs(3),
    enabled,
  });

  useEffect(() => {
    if (enabled) {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.BOOK, currentPage],
      });
      refetch();
    }
  }, [enabled, searchTerm, sort]);

  useEffect(() => {
    if (isSuccess) {
      setEnabled(false);
    }
  }, [isSuccess]);

  useHandleError({ error, isError, fieldName: "리뷰" });

  const { scrollRef } = useScrollRef({ currentPage });

  if (isLoading) return <DataTableSkeleton />;

  if (data && isBookData(data)) {
    if (!data.books.length) {
      return (
        <div className={styles.container} ref={scrollRef}>
          <div className={styles.wrapper}>
            <NoContent
              text="준비된 도서가 아직 없습니다."
              queryKey={[QueryKeys.BOOK]}
              refetch={refetch}
              error={error}
              isRefetching={isRefetching}
              isRefetchError={isRefetchError}
            />
          </div>
        </div>
      );
    }

    if (data.books.length) {
      return (
        <div className={styles.container} ref={scrollRef}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>도서 목록</h1>
            <FilterBooks />
            <BookTable
              books={data.books as IBook[]}
              isLoading={isLoading}
              dataLength={data?.pagination.totalBooks!}
            />
            <PaginateControl pageTotal={data?.pagination.totalPages!} />
          </div>
        </div>
      );
    }
  } else {
    return null;
  }
}

export const DataTableSkeleton = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <Skeleton className={cn("skeleton", styles.titleSkeleton)} />
      <FilterItemsSkeleton />
      <TableSkeleton />
    </div>
  </div>
);

function isBookData(data: BookData | IBook[]): data is BookData {
  return (data as BookData).books !== undefined;
}
