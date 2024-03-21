import { SetStateAction } from "react";
import { ServerError } from "./error";

type HandleServerError = {
  err: unknown;
  setError: (value: SetStateAction<boolean>) => void;
  setErrMsg: (value: SetStateAction<string>) => void;
};

type HandleErrorProps = {
  error: Error | null;
  errorDetails: {
    code: number;
    message: string;
  }[];
};

export const handleServerError = ({
  err,
  setError,
  setErrMsg,
}: HandleServerError) => {
  setError(true);

  if (err instanceof ServerError) {
    const httpError: ServerError = err;
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
};

export function handleError({ error, errorDetails }: HandleErrorProps) {
  if (error instanceof ServerError) {
    const detail = errorDetails.find((detail) => detail.code === error.status);

    if (detail) {
      return ` ${detail.message}`;
    } else {
      return ` 서버 에러가 발생하였습니다. (에러 코드: ${error.status})`;
    }
  } else if (error instanceof Error) {
    return `${error.name}: ${error.message}`;
  }

  return "예기치 못한 오류입니다.";
}
