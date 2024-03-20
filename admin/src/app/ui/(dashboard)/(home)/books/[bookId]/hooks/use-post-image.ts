import { updateBook as updateActions } from "@/app/actions/book";
import { uploadFiles } from "@/app/actions/utApi";
import { handleError } from "@/app/fetcher/handle-error";

import { RefObject, useEffect, useState } from "react";

import { toast } from "sonner";
import { UploadThingError } from "uploadthing/server";

export const usePostImage = ({
  bookId,
  formRef,
}: {
  bookId: string;
  formRef: RefObject<HTMLFormElement>;
}) => {
  const [imageUrls, setImageUrls] = useState<(string | undefined)[] | null>(
    null
  );
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const displayError = (err: unknown) => {
    console.log("calc");
    const errorMessage =
      err instanceof UploadThingError
        ? `이미지를 게시 하던 중 에러가 발생했어요.\n${err.code}: ${err.message}`
        : "이미지를 게시 하던 중 에러가 발생했어요.";
    toast.error(errorMessage);
  };

  const processUpload = async (formData: FormData) => {
    if (!formData) return;

    try {
      const images = await uploadFiles(formData);

      if (images.length) {
        setImageUrls(images);
        setIsUploadSuccess(true);
      }
    } catch (err) {
      setIsUploadSuccess(false);
      displayError(err);
    }
  };

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (!formRef.current) return;

    setIsUploadSuccess(false);

    const formData = new FormData(e?.currentTarget ?? formRef.current);

    await processUpload(formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleSubmit();
    }
  };

  useEffect(() => {
    const updateBook = async () => {
      if (!imageUrls || !isUploadSuccess) return;
      setIsPending(true);

      try {
        await updateActions({ bookId, images: imageUrls });
        toast.message("이미지 업로드를 성공적으로 마쳤어요.");
      } catch (err) {
        const message = handleError(err, "도서");
        toast.error(message);
      } finally {
        setIsPending(false);
        setImageUrls(null);
      }
    };

    updateBook();
  }, [bookId, imageUrls, isUploadSuccess]);

  return {
    isPending,
    handleFileChange,
    handleSubmit,
  };
};
