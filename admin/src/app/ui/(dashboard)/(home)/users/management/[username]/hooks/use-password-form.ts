import { HttpError } from "@/app/fetcher/error";
import { restFetcher } from "@/app/fetcher/fetcher";

import {
  FormEvent,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from "react";

import { validatePassword } from "../constants/validate";

type UsePasswordFormParams = {
  userId: string;
  onSuccess: () => void;
  onError: (errMsg: string) => void;
};

export const usePasswordForm = ({
  onSuccess,
  onError,
  userId,
}: UsePasswordFormParams) => {
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [isPending, startTransition] = useTransition();

  const handlePasswordChange = () => {
    setErrMsg("");
    setIsError(false);

    if (!validatePassword(password) && password.trim() !== "") {
      setErrMsg(
        "비밀번호는 최소 8자리, 대소문자, 숫자, 특수문자를 포함해야 합니다."
      );
      setIsError(true);
      onError(errMsg);
    }
  };

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handleSubmit = async () => {
    try {
      await restFetcher({
        url: `/user/session?userId=${userId}`,
        method: "PATCH",
        parsedValue: {
          password,
        },
      });
      onSuccess();
    } catch (err) {
      setIsError(true);
      if (err instanceof HttpError) {
        const { status } = err;

        if (status === 400) {
          setErrMsg("적합하지 않은 비밀번호 형식입니다.");
        }

        if (status === 500) {
          setErrMsg("서버 오류입니다. 잠시 후 다시 시도해주세요.");
        }
      } else if (err instanceof Error) {
        setErrMsg(`${err.name}: ${err.message}`);
      } else {
        setErrMsg("서버 오류입니다. 잠시 후 다시 시도해주세요.");
      }
    }
    onError(errMsg);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) =>
    startTransition(() => {
      e.preventDefault();
      handleSubmit();
    });

  useEffect(() => {
    handlePasswordChange();
  }, [password]);

  return {
    password,
    isPending,
    isError,
    errMsg,
    onChangePassword,
    handleSubmit,
    onSubmit,
  };
};
