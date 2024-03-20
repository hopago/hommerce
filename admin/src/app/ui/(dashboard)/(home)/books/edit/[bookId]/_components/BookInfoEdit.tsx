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
import Image from "next/image";

import { Skeleton } from "@nextui-org/react";
import { cn } from "@/app/ui/lib/utils";

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

  useHandleError({ error, isError, fieldName: "도서" });

  const { book, handleChange, handleSubmit, isPending } = useBookForm({
    initialBook: initialData,
    bookId,
  });

  if (isLoading) return <BookInfoEditSkeleton />;
  if (!initialData) return null;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrap}>
          <Image
            src={initialData.representImg}
            width={280}
            height={400}
            alt={initialData.title}
          />
        </div>
        <div className={styles.textWrap}>
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
            <div className={styles.buttonWrap}>
              <Button type="submit" text="수정하기" disabled={isPending} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export const BookInfoEditSkeleton = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.imgWrap}>
        <Skeleton className={cn("skeleton", styles.imgSkeleton)} />
      </div>
      <div className={styles.textWrap}>
        <div className={styles.form}>
          <div className={styles.inputWrap}>
            <Skeleton className={cn("skeleton", styles.labelSkeleton)} />
            <Skeleton className={cn("skeleton", styles.inputSkeleton)} />
          </div>
          <div className={styles.inputWrap}>
            <Skeleton className={cn("skeleton", styles.labelSkeleton)} />
            <Skeleton className={cn("skeleton", styles.inputSkeleton)} />
          </div>
          <div className={styles.inputWrap}>
            <Skeleton className={cn("skeleton", styles.labelSkeleton)} />
            <Skeleton className={cn("skeleton", styles.inputSkeleton)} />
          </div>
          <div className={styles.inputWrap}>
            <Skeleton className={cn("skeleton", styles.labelSkeleton)} />
            <Skeleton className={cn("skeleton", styles.inputSkeleton)} />
          </div>
          <div className={styles.inputWrap}>
            <Skeleton className={cn("skeleton", styles.labelSkeleton)} />
            <Skeleton className={cn("skeleton", styles.inputSkeleton)} />
          </div>
          <div className={styles.inputWrap}>
            <Skeleton className={cn("skeleton", styles.labelSkeleton)} />
            <Skeleton className={cn("skeleton", styles.inputSkeleton)} />
          </div>
          <div className={styles.inputWrap}>
            <Skeleton className={cn("skeleton", styles.labelSkeleton)} />
            <Skeleton className={cn("skeleton", styles.inputSkeleton)} />
          </div>
          <div className={styles.selectInput}>
            <Skeleton className={cn("skeleton", styles.labelSkeleton)} />
            <div className={styles.selectList}>
              <Skeleton className={cn("skeleton", styles.labelSkeleton)} />
              <Skeleton className={cn("skeleton", styles.buttonSkeleton)} />
            </div>
            <div className={styles.buttonWrap}>
              <Skeleton className={cn("skeleton", styles.buttonSkeleton)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
