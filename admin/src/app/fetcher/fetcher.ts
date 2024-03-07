import axios, { AxiosError, AxiosRequestConfig, isAxiosError } from "axios";

import { ApiMethod } from "../ui/(dashboard)/(home)/types/api-specs";

import { HttpError, ServerErrorResponse } from "./error";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

type RestFetcherParams = {
  url: string;
  method: ApiMethod;
  parsedValue?: unknown | null;
};

export const restFetcher = async <T = unknown>({
  url,
  method,
  parsedValue,
}: RestFetcherParams): Promise<T | HttpError> => {
  const config: AxiosRequestConfig = {
    method,
    url,
    baseURL: serverUrl,
  };

  if (parsedValue) {
    config.data = parsedValue;
  }

  try {
    const response = await axios(config);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError<ServerErrorResponse>;

      if (axiosError.response) {
        return new HttpError({
          message: axiosError.response.data.message,
          response: axiosError.response,
          status: axiosError.response.status,
          error: axiosError,
        });
      }
    }

    return new HttpError({
      message: "예기치 못한 오류입니다.",
      error,
      status: 500,
    });
  }
};
