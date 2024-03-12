import { HttpError } from "@/app/fetcher/error";
import { handleError } from "@/app/fetcher/handle-error";

import { useEffect } from "react";

import { toast } from "sonner";

type UseHandleErrorParams = {
  fieldName: string;
  error: Error | null;
  isError: boolean;
  isRefetchError?: boolean;
};

export const useHandleError = ({
  error,
  isError,
  isRefetchError,
  fieldName,
}: UseHandleErrorParams) => {
  useEffect(() => {
    if (!isError || !error) return;

    if ((isError && error) || (isRefetchError && error)) {
      if (error instanceof HttpError) {
        toast.error(handleError(error, fieldName));
      }
    }
  }, [isError, isRefetchError]);
};
