"use client";

import PaginateControl from "../../_components/PaginateControl";
import BookTable, { TableSkeleton } from "./BookTable";
import FilterBooks, { FilterItemsSkeleton } from "./FilterBooks";

import styles from "./book-search.module.css";

import { creatorFilterBooks } from "@/app/store/use-filter";
import { useCreatorPagination } from "@/app/store/use-pagination";
import { useScrollRef } from "../../hooks/use-scroll-ref";

import { QueryKeys } from "@/app/lib/getQueryClient";
import { useQuery } from "@tanstack/react-query";
import { fetchBookBySearchTerm } from "../services/fetchBookBySearchTerm";
import { daysToMs } from "../../utils/daysToMs";
import { useHandleError } from "../../users/management/[username]/hooks/use-handle-error";

import { NoContent } from "../../users/management/[username]/_components/NoContentTable";

import { Skeleton } from "@nextui-org/react";
import { cn } from "@/app/ui/lib/utils";

import { useEffect, useState } from "react";

export default function BooksSearchResults() {
  const { sort, filter, searchTerm, enabled } = creatorFilterBooks();
  const { currentPage } = useCreatorPagination();

  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isRefetching,
    isRefetchError,
  } = useQuery<BookData>({
    queryKey: [QueryKeys.BOOK, sort, filter, searchTerm, currentPage],
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

  useHandleError({ error, isError, fieldName: "리뷰" });

  const { scrollRef } = useScrollRef({ currentPage });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  if (isLoading) return <DataTableSkeleton />;

  if (!data?.books.length) {
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
