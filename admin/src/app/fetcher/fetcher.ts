import axios, { AxiosError, AxiosRequestConfig, isAxiosError } from "axios";

import { ApiMethod } from "../ui/(dashboard)/(home)/types/api-specs";

import { HttpError, ServerErrorResponse } from "./error";

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

type RestFetcherParams = {
  url: string;
  method: ApiMethod;
  parsedValue?: unknown | null;
};

type ReactQueryFetcherParams = {
  method: ApiMethod;
  path: string;
  body?: {
    [key: string]: any;
  };
  params?: unknown;
};

export const restFetcher = async <T = unknown>({
  url,
  method,
  parsedValue,
}: RestFetcherParams): Promise<T> => {
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
        throw new HttpError({
          message: axiosError.response.data.message,
          response: axiosError.response,
          status: axiosError.response.status,
          error: axiosError,
        });
      }
    }

    throw new HttpError({
      message: "예기치 못한 오류입니다.",
      error,
      status: 500,
    });
  }
};

export const reactQueryFetcher = async <T = unknown>({
  method,
  path,
  body,
  params,
}: ReactQueryFetcherParams): Promise<T> => {
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
        throw new HttpError({
          message: axiosError.response.data.message,
          response: axiosError.response,
          status: axiosError.response.status,
          error: axiosError,
        });
      }
    }

    throw new HttpError({
      message: "예기치 못한 오류입니다.",
      error,
      status: 500,
    });
  }
};
