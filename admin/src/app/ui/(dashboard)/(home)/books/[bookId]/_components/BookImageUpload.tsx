"use client";

import { useParams } from "next/navigation";

import { useRef } from "react";

import Spinner from "@/app/ui/_components/Spinner";

import { MdAddAPhoto } from "react-icons/md";

import styles from "./book-info.module.css";

import { usePostImage } from "../hooks/use-post-image";

export default function BookImageUpload() {
  const { bookId }: { bookId: string } = useParams();

  const formRef = useRef<HTMLFormElement>(null);

  const { handleSubmit, handleFileChange, isPending } = usePostImage({
    formRef,
    bookId,
  });

  return (
    <form
      className={styles.bookImageUpload}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <label htmlFor="post-book-image">
        {isPending ? (
          <Spinner text="이미지를 업로드 하는 중 이에요." />
        ) : (
          <>
            <MdAddAPhoto size={28} />
            <span>이미지 업로드</span>
            <input
              id="post-book-image"
              name="files"
              type="file"
              multiple
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </>
        )}
      </label>
    </form>
  );
}
