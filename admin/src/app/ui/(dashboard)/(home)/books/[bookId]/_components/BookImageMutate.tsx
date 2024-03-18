"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import { useRef } from "react";

import styles from "./book-info.module.css";

import { FaCamera } from "react-icons/fa";

import { useMutateImage } from "../hooks/use-mutate-image";

import Spinner from "@/app/ui/_components/Spinner";

type BookImageMutateProps = {
  image: string;
};

export default function BookImageMutate({ image }: BookImageMutateProps) {
  const { bookId }: { bookId: string } = useParams();

  const formRef = useRef<HTMLFormElement>(null);

  const { handleFileChange, handleSubmit, isPending } = useMutateImage({
    bookId,
    imageUrl: image,
    formRef,
  });

  return (
    <form className={styles.imgList} onSubmit={handleSubmit} ref={formRef}>
      <Image
        src={image}
        alt="book-image"
        width={210}
        height={340}
        className="disabled-click"
      />
      <label htmlFor="update-book-image" className={styles.imgMutate}>
        {isPending ? (
          <Spinner text="이미지를 변경 하는 중 이에요." />
        ) : (
          <>
            <div className={styles.mutateTexts}>
              <FaCamera size={28} />
              <span>이미지 변경</span>
            </div>
            <input
              type="file"
              name="files"
              id="update-book-image"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </>
        )}
      </label>
    </form>
  );
}
