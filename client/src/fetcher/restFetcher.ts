import axios, { AxiosError, AxiosRequestConfig, isAxiosError } from "axios";

import { ServerError, ServerErrorResponse } from "./error";

type ApiMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type RestFetcherProps = {
  method: ApiMethod;
  path: string;
  body?: {
    [key: string]: any;
  };
  params?: unknown;
};

const serverUrl = import.meta.env.VITE_API_SERVER_URL;

export const restFetcher = async <T = unknown>({
  method,
  path,
  body,
  params,
}: RestFetcherProps): Promise<T> => {
  const config: AxiosRequestConfig = {
    method,
    url: `${serverUrl}${path}`,
    data: body,
    params,
  };

  try {
    const response = await axios(config);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError<ServerErrorResponse>;

      if (axiosError.response) {
        throw new ServerError({
          message: axiosError.response.data.message,
          response: axiosError.response,
          status: axiosError.response.status,
          error: axiosError,
        });
      }
    }

    throw new ServerError({
      message: "예기치 못한 오류입니다.",
      error,
      status: 500,
    });
  }
};
