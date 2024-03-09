"use client"

import { AxiosError, AxiosResponse } from "axios";

export interface ServerErrorResponse {
  status: number;
  message: string;
}

type HttpErrorConstructorParams = {
  message: string;
  error?: Error | AxiosError | unknown;
  response?: AxiosResponse | Response;
  status: number;
};

export class HttpError extends Error {
  message: string;
  response?: AxiosResponse | Response;
  error?: Error | AxiosError | unknown;
  status: number;

  constructor({
    message,
    response,
    status,
    error,
  }: HttpErrorConstructorParams) {
    super(message || "HTTP 오류");
    this.message = message;
    this.error = error;
    this.response = response;
    this.status = status;
  }
}
