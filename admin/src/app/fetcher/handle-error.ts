import { SetStateAction } from "react";
import { HttpError } from "./error";

type HandleHttpErrorParams = {
  err: unknown;
  setError: (value: SetStateAction<boolean>) => void;
  setErrMsg: (value: SetStateAction<string>) => void;
};

export const handleHttpError = ({
  err,
  setError,
  setErrMsg,
}: HandleHttpErrorParams) => {
  setError(true);

  if (err instanceof HttpError) {
    const httpError: HttpError = err;
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
