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
  const [file, setFile] = useState<FileList | null>(null);
  const [newImgUrl, setNewImgUrl] = useState<string | string[] | null>(null);

  const [isPending, setIsPending] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files);
  };

  useEffect(() => {
    if (!file) return;

    const uploadImages = async () => {
      try {
        const image = await uploadFiles(file);

        if (image && image[0]) {
          setNewImgUrl(image[0]);
        }

        setFile(null);
      } catch (err) {
        if (err instanceof UploadThingError) {
          toast.error(`
                이미지를 업로드 하던 중 에러가 발생했어요.
                ${err.code}: ${err.message}
                `);
        } else {
          toast.error("이미지를 업로드 하던 중 에러가 발생했어요.");
        }
      }
    };

    uploadImages();
  }, [file]);

  useEffect(() => {
    if (!newImgUrl) return;

    const mutate = async (imgUrls: string | string[]) => {
      setIsPending(true);
      try {
        await updateBookImage({ file: imgUrls, bookId, imageUrl });

        setNewImgUrl(null);
        setIsPending(false);
      } catch (err) {
        setIsPending(false);
        const message = handleError(err, "도서");

        toast.error(message);
      }
    };

    mutate(newImgUrl);
  }, [newImgUrl]);

  return {
    onChange,
    isPending,
  };
};
