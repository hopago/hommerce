"use client";

import Image from "next/image";

import styles from "./book-info.module.css";

import { FaCamera } from "react-icons/fa";

import { useMutateImage } from "../hooks/use-mutate-image";

import { useParams } from "next/navigation";

type BookImageMutateProps = {
  image: string;
};

export default function BookImageMutate({ image }: BookImageMutateProps) {
  const { bookId }: { bookId: string } = useParams();
  const { onChange } = useMutateImage({ bookId, imageUrl: image });

  return (
    <li className={styles.imgList}>
      <Image
        src={image}
        alt="book-image"
        width={210}
        height={340}
        className="disabled-click"
      />
      <label htmlFor="update-book-image" className={styles.imgMutate}>
        <div className={styles.mutateTexts}>
          <FaCamera size={28} />
          <span>이미지 변경</span>
        </div>
        <input
          type="file"
          id="update-book-image"
          onChange={onChange}
          style={{ display: "none" }}
        />
      </label>
    </li>
  );
}
