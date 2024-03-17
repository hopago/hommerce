"use client";

import Image from "next/image";

import styles from "./book-info.module.css";

import { translateFieldTitleToKor } from "../utils/translateFieldValueToKor";
import BookImageMutate from "./BookImageMutate";
import BookImageUpload from "./BookImageUpload";

type BookInfoDetailsImagesProps = {
  title: string;
  images: string[];
};

// TODO: 각 이미지 hover, 이미지 수정 + 클릭시 이미지 업로드 & uploadthing 삭제, 마지막 컴포넌트 사진 추가

export default function BookInfoDetailsImages({
  title,
  images,
}: BookInfoDetailsImagesProps) {
  if (!images.length) return null;

  return (
    <div className={styles.detailsCardContainer}>
      <h3>{translateFieldTitleToKor(title)}</h3>
      <ul className={styles.imagesContainer}>
        {images.map((image) => (
          <BookImageMutate key={image} image={image} />
        ))}
        <BookImageUpload />
      </ul>
    </div>
  );
}
