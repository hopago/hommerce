import { toast } from "sonner";

import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: { maxFileSize: "8MB", maxFileCount: 5 },
  })
    .onUploadError((error) => {
      const {
        error: { code, message },
      } = error;

      toast.error(
        `이미지 업로드 중 에러가 발생했어요. 코드: ${code}, 메시지: ${message}`
      );
    })
    .onUploadComplete(async ({ file }) => {
      return { fileUrl: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
