"use client";

import PaginateControl from "../../_components/PaginateControl";
import BookTable from "./BookTable";
import FilterBooks from "./FilterBooks";

import styles from "./book-search.module.css";

import { creatorFilterBooks } from "@/app/store/use-filter";
import { useCreatorPagination } from "@/app/store/use-pagination";
import { usePaginatedData } from "../../users/hooks/use-paginated-data";

import { QueryKeys } from "@/app/lib/getQueryClient";
import { useQuery } from "@tanstack/react-query";
import { fetchBookBySearchTerm } from "../services/fetchBookBySearchTerm";
import { daysToMs } from "../../utils/daysToMs";
import { useHandleError } from "../../users/management/[username]/hooks/use-handle-error";

import { NoContent } from "../../users/management/[username]/_components/NoContentTable";
import { PAGE_THRESHOLD } from "../../constants/pagination";

// TODO: Sort 옵션 추가, DB 검색 옵션 수정

export default function BooksSearchResults() {
  const { sort, filter, searchTerm, enabled } = creatorFilterBooks();
  const { handleMoveToFirstPage, currentPage } = useCreatorPagination();

  const {
    data,
    error,
    isError,
    isLoading,
    refetch,
    isRefetching,
    isRefetchError,
  } = useQuery<BookData>({
    queryKey: [QueryKeys.BOOK],
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

  if (!data || !data.books || !data.pagination)
    return (
      <div className={styles.container}>
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

  const { paginatedData, pageTotal } = usePaginatedData({
    data: data.books,
    sort,
    handleMoveToFirstPage,
    currentPage,
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>도서 목록</h1>
        <FilterBooks />
        <BookTable
          books={paginatedData as IBook[]}
          isLoading={isLoading}
          dataLength={pageTotal * PAGE_THRESHOLD}
        />
        <PaginateControl pageTotal={pageTotal} />
      </div>
    </div>
  );
}
