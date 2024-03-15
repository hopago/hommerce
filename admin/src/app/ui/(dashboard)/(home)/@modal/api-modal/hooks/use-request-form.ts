import { useParamsInput } from "@/app/store/use-params-input";
import { useBodyInput } from "@/app/store/use-body-input";
import { restFetcher } from "@/app/fetcher/fetcher";

import { ApiMethod } from "../../../types/api-specs";

import { useState, useTransition } from "react";

import { HttpError } from "@/app/fetcher/error";
import { handleHttpError } from "@/app/fetcher/handle-error";

type UseRequestFormParams = {
  path: string | undefined;
  method: ApiMethod | undefined;
  onSuccess: (message?: string) => void;
  onError: () => void;
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

  let externalUrl: string = "";

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

      externalUrl = queryString ? `${finalPath}?${queryString}` : finalPath;
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (externalUrl === path && (pathField?.value || queryField?.value)) {
      setErr(true);
      setErrMsg("URL 설정 오류입니다. 다시 시도해주세요.");
      onError();
    }

    try {
      const data = await restFetcher({
        url: externalUrl,
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
    } catch (error) {
      handleHttpError({ err: error, setErrMsg, setError: setErr });
    }
  };

  const execute = (e: React.FormEvent<HTMLFormElement>) => {
    startTransition(() => {
      handleSubmit(e);
    });
  };

  return {
    handleSubmit,
    execute,
    data,
    isPending,
    err,
    errMsg,
  };
}
