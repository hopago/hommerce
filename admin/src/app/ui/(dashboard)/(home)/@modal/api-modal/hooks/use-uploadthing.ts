import { useState } from "react";

import { ApiInfo } from "../../../types/api-specs";
import { ClientUploadedFileData } from "uploadthing/types";

import { toast } from "sonner";

type UseUploadthingParams = {
  specs: ApiInfo | undefined | null;
};

export const useUploadthing = ({ specs }: UseUploadthingParams) => {
  const [showUpload, setShowUpload] = useState(false);
  const [imgUrls, setImgUrls] = useState<string[] | null>(null);

  const prepareImage = specs?.hasImg;
  const hasImage = imgUrls?.length ?? 0 > 0;

  const showUploadButton = () => {
    setShowUpload(true);
  };

  const handleUploadSuccess = (
    res: ClientUploadedFileData<{
      fileUrl: string;
    }>[]
  ) => {
    toast.message("이미지 업로드를 성공적으로 마쳤어요.");
    const urls = res.map((res) => res.url);
    setImgUrls(urls);
    setShowUpload(false);
  };

  return {
    imgUrls,
    showUpload,
    showUploadButton,
    prepareImage,
    handleUploadSuccess,
    hasImage,
  };
};
