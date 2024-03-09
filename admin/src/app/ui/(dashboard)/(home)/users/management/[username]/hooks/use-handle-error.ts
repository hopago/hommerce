import { HttpError } from "@/app/fetcher/error";

import { useEffect } from "react";

import { toast } from "sonner";

type UseHandleErrorParams = {
  error: Error | null;
  isError: boolean;
  isRefetchError: boolean;
};

export const useHandleError = ({
  error,
  isError,
  isRefetchError,
}: UseHandleErrorParams) => {
  useEffect(() => {
    if (!isError || !error) return;

    if (isError && error) {
      if (error instanceof HttpError) {
        if (error.status === 404) {
          toast.error("유저를 찾지 못했습니다.");
        } else {
          toast.error(`${error.status}: ${error.message}`);
        }
      } else if (error instanceof Error) {
        toast.error(`${error.name}: ${error.message}`);
      } else {
        toast.error("예기치 못한 오류입니다.");
      }
    }
  }, [isError, isRefetchError]);
};
