import { useEffect } from "react";

import { ServerError } from "../../fetcher/error";

import { toast } from "sonner";
import { handleError } from "../../fetcher/handle-error";

type CustomizeError = {
  error: Error | null;
  isError: boolean;
  isRefetchError?: boolean;
  errorDetails: {
    code: number;
    message: string;
  }[];
};

export const useHandleError = ({
  error,
  isError,
  isRefetchError,
  errorDetails,
}: CustomizeError) => {
  useEffect(() => {
    if (!isError || !error) return;

    if ((isError && error) || (isRefetchError && error)) {
      if (error instanceof ServerError) {
        toast.error(handleError({ error, errorDetails }));
      }
    }
  }, [isError, isRefetchError]);
};
