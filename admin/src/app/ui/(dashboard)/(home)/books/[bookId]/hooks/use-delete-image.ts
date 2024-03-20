import { deleteImages } from "@/app/actions/utApi";

import { Dispatch, SetStateAction, useState } from "react";

import { toast } from "sonner";

import { UploadThingError } from "uploadthing/server";

import { HttpError } from "@/app/fetcher/error";

import { deleteBookImage } from "@/app/actions/book";

export const useDeleteImage = ({
  bookId,
  imageUrl,
  setShow,
}: {
  bookId: string;
  imageUrl: string;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isPending, setIsPending] = useState(false);

  const displayError = (err: unknown) => {
    const errorMessage =
      err instanceof UploadThingError
        ? `이미지를 삭제 하던 중 에러가 발생했어요.\n${err.code}: ${err.message}`
        : "이미지를 삭제 하던 중 에러가 발생했어요.";
    console.log(errorMessage);
    toast.error(errorMessage);
  };

  const processDelete = async (imageUrl: string[] | string) => {
    try {
      await deleteImages(imageUrl);

      toast.success("이미지를 성공적으로 삭제했습니다.");
    } catch (err) {
      throw err;
    }
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setIsPending(true);

    try {
      await processDelete(imageUrl);
    } catch (err) {
      console.log(err);
      displayError(err);
      setIsPending(false);
      return;
    }

    try {
      await deleteBookImage({ bookId, deletedImageUrl: imageUrl });

      setShow(false);
    } catch (err) {
      if (err instanceof HttpError) {
        const { message, status } = err;

        if (status === 400) {
          toast.error("책 아이디가 필요합니다.");
        }

        if (status === 404) {
          message === "Book not found."
            ? toast.error("책을 찾지 못했습니다.")
            : toast.error("이미지를 찾지 못했습니다.");
        }

        if (status === 500) {
          toast.error("서버 에러입니다, 잠시 후 다시 시도해주세요.");
        }
      } else if (err instanceof Error) {
        const { stack, message } = err;

        toast.error(`${stack}: ${message}`);
      } else {
        toast.error("예기치 못한 오류입니다.");
      }
    } finally {
      setIsPending(false);
    }
  };

  return {
    isPending,
    handleClick,
  };
};
