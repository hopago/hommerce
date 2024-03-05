import { useParamsInput } from "@/app/store/use-params-input";
import { useBodyInput } from "@/app/store/use-body-input";
import { restFetcher } from "@/app/fetcher/fetcher";

import { ApiMethod } from "../../../types/api-specs";

import { useState } from "react";
import { AxiosError, isAxiosError } from "axios";

type UseRequestFormParams = {
  path: string | undefined;
  method: ApiMethod | undefined;
};

export default function useRequestForm({ path, method }: UseRequestFormParams) {
  const {
    field: { query: queryField, path: pathField },
  } = useParamsInput();
  const { parsedValue } = useBodyInput();

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

  if (url === path && (pathField?.value || queryField?.value)) {
    setErr(true);
    setErrMsg("URL 설정 오류입니다. 다시 시도해주세요.");
  }

  const handleSubmit = async () => {
    try {
      const data = await restFetcher({ url, method: method!, parsedValue });

      setData(data);
    } catch (error) {
      setErr(true);

      if (isAxiosError(error)) {
        const axiosError = error as AxiosError;

        if (axiosError.response) {
          const statusCode = axiosError.response.status;
          if (statusCode >= 400 && statusCode < 500) {
            setErrMsg("클라이언트 오류입니다. 필수 필드를 다시 확인해주세요.");
          } else if (statusCode >= 500) {
            setErrMsg("서버 오류입니다. 잠시 후 다시 시도해주세요.");
          }
        }
      } else {
        setErrMsg("예상치 못한 오류가 발생했습니다.");
      }
    }
  };

  return {
    handleSubmit,
    data,
    err,
    errMsg,
  };
}
