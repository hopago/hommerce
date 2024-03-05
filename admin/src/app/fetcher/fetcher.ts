import axios, { AxiosError, AxiosRequestConfig, isAxiosError } from "axios";

import { ApiMethod } from "../ui/(dashboard)/(home)/types/api-specs";

const serverUrl = process.env.SERVER_URL;

type RestFetcherParams = {
  url: string;
  method: ApiMethod;
  parsedValue: unknown | null;
};

export const restFetcher = async ({
  url,
  method,
  parsedValue,
}: RestFetcherParams) => {
  const fullUrl = `${serverUrl}${url}`;

  const config: AxiosRequestConfig = {
    method,
    url: fullUrl,
  };

  if (parsedValue) {
    config.data = parsedValue;
  }

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return {
        status: axiosError.status,
        message: axiosError.message,
      };
    } else {
      throw new Error("Unexpected error occurred.");
    }
  }
};
