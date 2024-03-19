"use client";

import { useParams, useRouter } from "next/navigation";

import Button from "../../../_components/Button";

import styles from "./book-info.module.css";

export default function BookInfoHeaderButton() {
  const { bookId } = useParams();
  const router = useRouter();

  const onClick = () => router.push(`/books/edit/${bookId}`);

  return (
    <div className={styles.headerButton}>
      <Button
        type="button"
        text="수정하기"
        onClick={onClick}
        backgroundColor="#4EFDC9"
        color="#343339"
      />
    </div>
  );
}
