import { updateBookImage } from "@/app/actions/book";
import { uploadFiles } from "@/app/actions/utApi";
import { handleError } from "@/app/fetcher/handle-error";

import { RefObject, useEffect, useState } from "react";

import { toast } from "sonner";

import { UploadThingError } from "uploadthing/server";

export const useMutateImage = ({
  bookId,
  imageUrl,
  formRef,
}: {
  bookId: string;
  imageUrl: string;
  formRef: RefObject<HTMLFormElement>;
}) => {
  const [newImgUrl, setNewImgUrl] = useState<string | undefined | null>(null);

  const [isUploadSuccess, setIsUploadSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const displayError = (err: unknown) => {
    const errorMessage =
      err instanceof UploadThingError
        ? `이미지를 업로드 하던 중 에러가 발생했어요.\n${err.code}: ${err.message}`
        : "이미지를 업로드 하던 중 에러가 발생했어요.";
    toast.error(errorMessage);
  };

  const processUpload = async (formData: FormData) => {
    if (!formData) return;

    try {
      const images = await uploadFiles(formData);

      if (images.length) {
        setNewImgUrl(images[0]);
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

    if (!formData) return;

    await processUpload(formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleSubmit();
    }
  };

  useEffect(() => {
    const mutate = async (newImageUrl: string) => {
      setIsPending(true);
      try {
        await updateBookImage({
          updatedImageUrl: newImageUrl,
          bookId,
          imageUrl,
        });
      } catch (err) {
        const message = handleError(err, "도서");

        toast.error(message);
      } finally {
        setIsPending(false);
        setNewImgUrl(null);
      }
    };

    if (isUploadSuccess && newImgUrl) {
      mutate(newImgUrl);
    }
  }, [newImgUrl, isUploadSuccess, bookId, imageUrl]);

  return {
    isPending,
    handleFileChange,
    handleSubmit,
  };
};
