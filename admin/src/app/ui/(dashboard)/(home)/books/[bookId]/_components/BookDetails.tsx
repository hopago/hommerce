import Image from "next/image";
import Link from "next/link";

import { cache } from "react";

import styles from "./book-info.module.css";

import { HttpError } from "@/app/fetcher/error";

import {
  IDetailsNoContent,
  getBookDetails as handleGetBookDetails,
} from "@/app/services/getBookDetails";

import Button from "../../../_components/Button";
import BookDetailsInfo from "./BookDetailsInfo";

export const preload = (bookId: string) => {
  void getBookDetails(bookId);
};

export const getBookDetails = cache(async (bookId: string) => {
  try {
    const details = await handleGetBookDetails(bookId);

    return details;
  } catch (err) {
    const error = err as HttpError;
    const status = error.status;

    if (status) {
      switch (status) {
        case 400:
          throw new Error("책 아이디를 받지 못했어요.");
        case 404:
          throw new Error("해당 책 아이디로 세부정보를 찾지 못했습니다.");
        case 500:
          throw new Error("서버 에러입니다. 잠시 후 다시 시도해주세요.");
        default:
          throw new Error("서버 에러입니다. 잠시 후 다시 시도해주세요.");
      }
    } else {
      throw new Error("서버 에러입니다. 잠시 후 다시 시도해주세요.");
    }
  }
});

type BookDetailsProps = {
  bookId: string;
};

export default async function BookDetails({ bookId }: BookDetailsProps) {
  const details = await getBookDetails(bookId);

  if (isNoContent(details)) return <NoContent />;

  return <BookDetailsInfo details={details} />;
}

function NoContent() {
  return (
    <div className={styles.bookInfo}>
      <div className={styles.bookInfoWrap}>
        <div className={styles.bookInfoHeader}>
          <div className={styles.headerTitle}>
            <div className={styles.fill} />
            <h1>도서 상세정보</h1>
          </div>
        </div>
        <div className={styles.noContent}>
          <Image
            src="/img_no-results.png"
            width={320}
            height={320}
            alt="no-results"
          />
          <p>상세정보가 아직 작성되지 않았습니다.</p>
          <Link href="/books" className={styles.link}>
            <Button text="작성하러 가기" type="button" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function isNoContent(obj: any): obj is IDetailsNoContent {
  return "code" in obj && typeof obj.code === "number";
}
