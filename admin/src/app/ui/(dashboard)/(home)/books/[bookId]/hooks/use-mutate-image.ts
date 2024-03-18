import { updateBookImage } from "@/app/actions/book";
import { uploadFiles } from "@/app/actions/utApi";
import { handleError } from "@/app/fetcher/handle-error";

import { useEffect, useState } from "react";

import { toast } from "sonner";
import { UploadThingError } from "uploadthing/server";

export const useMutateImage = ({
  bookId,
  imageUrl,
}: {
  bookId: string;
  imageUrl: string;
}) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const [newImgUrl, setNewImgUrl] = useState<string | undefined | null>(null);

  const [isUploadSuccess, setIsUploadSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  useEffect(() => {
    if (!files) return;

    const uploadImages = async () => {
      setIsUploadSuccess(false);
      try {
        const image = await uploadFiles(JSON.parse(JSON.stringify(files)));

        if (image) {
          setNewImgUrl(image[0]);
        }

        setFiles(null);
        setIsUploadSuccess(true);
      } catch (err) {
        if (err instanceof UploadThingError) {
          toast.error(`
                이미지를 업로드 하던 중 에러가 발생했어요.
                ${err.code}: ${err.message}
                `);
        } else {
          toast.error("이미지를 업로드 하던 중 에러가 발생했어요.");
        }
        setIsUploadSuccess(false);
      }
    };

    uploadImages();
  }, [files]);

  useEffect(() => {
    if (!newImgUrl) return;

    const mutate = async (newImageUrl: string | undefined) => {
      setIsPending(true);
      try {
        await updateBookImage(
          JSON.parse(
            JSON.stringify({
              updatedImageUrl: newImageUrl,
              bookId,
              imageUrl,
            })
          )
        );

        setNewImgUrl(null);
        setIsPending(false);
      } catch (err) {
        setIsPending(false);
        const message = handleError(err, "도서");

        toast.error(message);
      }
    };

    if (isUploadSuccess) {
      mutate(newImgUrl);
    }
  }, [newImgUrl, isUploadSuccess]);

  return {
    onChange,
    isPending,
  };
};
