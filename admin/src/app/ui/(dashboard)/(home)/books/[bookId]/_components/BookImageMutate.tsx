"use client";

import Image from "next/image";
import { useParams } from "next/navigation";

import { useRef } from "react";

import styles from "./book-info.module.css";

import { FaCamera } from "react-icons/fa";

import { useMutateImage } from "../hooks/use-mutate-image";
import { useContextMenu } from "../hooks/use-context-menu";

import Spinner from "@/app/ui/_components/Spinner";
import DeleteImageMenu from "./DeleteImageMenu";

type BookImageMutateProps = {
  image: string;
};

export default function BookImageMutate({ image }: BookImageMutateProps) {
  const { bookId }: { bookId: string } = useParams();

  const formRef = useRef<HTMLFormElement>(null);
  const contextMenuRef = useRef<HTMLDivElement>(null);

  const { handleFileChange, handleSubmit, isPending } = useMutateImage({
    bookId,
    imageUrl: image,
    formRef,
  });

  const { show, setShow, onContextMenu, position } = useContextMenu({
    ref: contextMenuRef,
  });

  return (
    <form
      className={styles.imgList}
      onSubmit={handleSubmit}
      ref={formRef}
      onContextMenu={onContextMenu}
    >
      <Image
        src={image}
        alt="book-image"
        width={210}
        height={340}
        className="disabled-click"
      />
      <label
        htmlFor="update-book-image"
        className={styles.imgMutate}
        style={show ? { display: "none" } : { display: "flex" }}
      >
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
      {show && (
        <DeleteImageMenu
          ref={contextMenuRef}
          x={position.x}
          y={position.y}
          setShow={setShow}
          imageUrl={image}
        />
      )}
    </form>
  );
}
