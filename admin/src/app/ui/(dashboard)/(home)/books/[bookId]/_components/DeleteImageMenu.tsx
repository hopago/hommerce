import { Dispatch, SetStateAction, forwardRef } from "react";

import styles from "./book-info.module.css";

import { IoMdTrash } from "react-icons/io";
import { FaSpinner } from "react-icons/fa";

import { useDeleteImage } from "../hooks/use-delete-image";

import { useParams } from "next/navigation";

type DeleteImageMenuProps = {
  x: number;
  y: number;
  setShow: Dispatch<SetStateAction<boolean>>
  imageUrl: string;
};

const DeleteImageMenu = forwardRef<HTMLDivElement, DeleteImageMenuProps>(
  ({ x, y, imageUrl, setShow }, ref) => {
    const { bookId }: { bookId: string } = useParams();

    const { handleClick, isPending } = useDeleteImage({ bookId, imageUrl, setShow });

    return (
      <div
        ref={ref}
        style={{ position: "fixed", top: y, left: x }}
        className={styles.contextContainer}
      >
        <button type="button" onClickCapture={handleClick}>
          {isPending ? (
            <FaSpinner size={21} className={styles.loadingIcon} />
          ) : (
            <IoMdTrash size={21} />
          )}
          <span>이미지 삭제</span>
        </button>
      </div>
    );
  }
);

export default DeleteImageMenu;
