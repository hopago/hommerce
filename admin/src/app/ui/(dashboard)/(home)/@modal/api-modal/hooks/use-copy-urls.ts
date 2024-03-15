import { useState } from "react";

import { toast } from "sonner";

export const useCopyUrlsToClipboard = (urls: string[]) => {
  const [isLoading, setIsLoading] = useState(false);

  const isSingle = Array.isArray(urls) && urls.length === 1;

  const onClick = async () => {
    setIsLoading(true);

    if (isSingle) {
      try {
        await navigator.clipboard.writeText(urls.join());
        toast.success("URL이 클립보드에 복사되었습니다.");
        setIsLoading(false);
      } catch (err) {
        toast.error("복사에 실패했습니다. 다시 시도해주세요.");
        setIsLoading(false);
      }
    } else {
      const urlsText = urls.join("\n");
      try {
        await navigator.clipboard.writeText(urlsText);
        toast.success("모든 URL이 클립보드에 복사되었습니다.");
        setIsLoading(false);
      } catch (error) {
        toast.error("복사에 실패했습니다. 다시 시도해주세요.");
        setIsLoading(false);
      }
    }
  };

  return {
    isLoading,
    onClick,
  };
};
