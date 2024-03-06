import { useParamsInput } from "@/app/store/use-params-input";
import { useBodyInput } from "@/app/store/use-body-input";
import { restFetcher } from "@/app/fetcher/fetcher";

import { ApiMethod } from "../../../types/api-specs";

import { useState, useTransition } from "react";

import { HttpError } from "@/app/fetcher/error";

type UseRequestFormParams = {
  path: string | undefined;
  method: ApiMethod | undefined;
  onSuccess: (message?: string) => void;
  onError: (message: string) => void;
};

export default function useRequestForm({
  path,
  method,
  onSuccess,
  onError,
}: UseRequestFormParams) {
  const {
    field: { query: queryField, path: pathField },
  } = useParamsInput();
  const { parsedValue } = useBodyInput();

  const [isPending, startTransition] = useTransition();

  const [data, setData] = useState<unknown>(null);

  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  let url: string = "";

  if (pathField) {
    const finalPath = path
      ? path.replace(`:${pathField.name}`, pathField.value)
      : "";

    if (queryField) {
      const queryParams = new URLSearchParams();
      if (queryField.name && queryField.value) {
        queryParams.append(queryField.name, queryField.value);
      }
      const queryString = queryParams.toString();

      url = queryString ? `${finalPath}?${queryString}` : finalPath;
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (url === path && (pathField?.value || queryField?.value)) {
      setErr(true);
      setErrMsg("URL 설정 오류입니다. 다시 시도해주세요.");
    }

    try {
      startTransition(async () => {
        const data = await restFetcher({
          url,
          method: method!,
          parsedValue,
        });

        if (data instanceof HttpError) {
          setData({
            status: data.status,
            message: data.message,
          });
          onSuccess("요청은 성공적으로 처리됐으나 서버 에러가 반환됐어요.");
          return;
        }

        setData(data);
        onSuccess();
      });
    } catch (error) {
      setErr(true);

      if (error instanceof HttpError) {
        const httpError: HttpError = error;
        const statusCode = httpError.status;

        if (statusCode >= 400 && statusCode < 500) {
          setErrMsg(
            httpError.message ||
              "클라이언트 오류입니다. 필수 필드를 다시 확인해주세요."
          );
        } else if (statusCode >= 500) {
          setErrMsg(
            httpError.message || "서버 오류입니다. 잠시 후 다시 시도해주세요."
          );
        }
      } else {
        setErrMsg("예상치 못한 오류가 발생했습니다.");
      }

      onError(errMsg);
    }
  };

  return {
    handleSubmit,
    data,
    isPending,
    err,
    errMsg,
  };
}
