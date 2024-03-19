"use client";

import { useParams } from "next/navigation";

import styles from "./book-info-edit.module.css";

import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/app/lib/getQueryClient";
import { getSingleBook } from "@/app/services/getBook";
import { daysToMs } from "../../../../utils/daysToMs";

import { useHandleError } from "../../../../users/management/[username]/hooks/use-handle-error";
import { useBookForm } from "../hooks/use-book-form";

import Button from "../../../../_components/Button";
import Inputs from "./Inputs";
import SelectForm from "./SelectForm";

export default function BookInfoEdit() {
  const { bookId }: { bookId: string } = useParams();

  const {
    data: initialData,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: [QueryKeys.BOOK, bookId],
    queryFn: () => getSingleBook(bookId),
    staleTime: daysToMs(7),
    gcTime: daysToMs(9),
    enabled: !!bookId,
  });

  if (isLoading) return <BookInfoEditSkeleton />;

  useHandleError({ error, isError, fieldName: "도서" });

  if (!initialData) return null;

  const { book, handleChange, handleSubmit, isPending } = useBookForm({
    initialBook: initialData,
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrap}>{/* 이미지 */}</div>
        <div className={styles.textWrap}>
          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <Inputs book={book} handleChange={handleChange} />
              <SelectForm
                type="상위 분야"
                value={initialData.parentCategory!}
                bookId={bookId}
              />
              <SelectForm
                type="책 카테고리"
                value={initialData.category!}
                bookId={bookId}
              />
              <SelectForm
                type="판매 방식"
                value={initialData.sellType!}
                bookId={bookId}
              />
              <Button type="submit" text="수정하기" disabled={isPending} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const BookInfoEditSkeleton = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.imgWrap}></div>
      <div className={styles.textWrap}>
        <div className={styles.formContainer}>
          <div className={styles.form}></div>
        </div>
      </div>
    </div>
  </div>
);
