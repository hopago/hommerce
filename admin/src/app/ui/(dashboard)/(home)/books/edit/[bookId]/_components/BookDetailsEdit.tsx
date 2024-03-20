"use client";

import styles from "./book-detail-edit.module.css";

import { useEffect, useState } from "react";

import { QueryKeys } from "@/app/lib/getQueryClient";
import { getBookDetails } from "@/app/services/getBookDetails";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { daysToMs } from "../../../../utils/daysToMs";
import { isDetails } from "../utils/isDetails";

import { useHandleError } from "../../../../users/management/[username]/hooks/use-handle-error";

import { toast } from "sonner";

import { BookInfoEditSkeleton } from "./BookInfoEdit";
import BookDetailsEditHeader from "./BookDetailsEditHeader";
import BookDetailsField from "./BookDetailsField";

export type TextareaFields = Omit<IDetails, "bookId">;

export type TextareaKeys = keyof TextareaFields;

export default function BookDetailEdit() {
  const { bookId }: { bookId: string } = useParams();

  const fields: TextareaKeys[] = [
    "awards",
    "intro",
    "contentsList",
    "bookInside",
    "bookPublisherReview",
  ];

  const { data, isLoading, error, isError } = useQuery({
    queryKey: [QueryKeys.BOOK_DETAIL, bookId],
    queryFn: () => getBookDetails(bookId),
    staleTime: daysToMs(7),
    gcTime: daysToMs(9),
    enabled: !!bookId,
  });

  useHandleError({ error, isError, fieldName: "세부 정보" });

  const [isExist, setIsExist] = useState<boolean | null>(null);

  useEffect(() => {
    if (data && "code" in data) {
      if (data.code === 404) {
        setIsExist(false);
        toast.message("도서 상세 정보가 없습니다, POST 메소드가 제공됩니다.");
      }
    } else {
      setIsExist(true);
    }
  }, [data]);

  if (isLoading) return <BookInfoEditSkeleton />;

  const details = isDetails(data);

  return (
    <div className={styles.bookDetailsEdit}>
      <BookDetailsEditHeader isExist={isExist!} />
      <div className={styles.textareaContainer}>
        <h3>데이터 입력란</h3>
        <BookDetailsField keys={fields} details={details} isExist={isExist!} />
      </div>
    </div>
  );
}
