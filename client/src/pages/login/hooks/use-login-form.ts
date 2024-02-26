import { useSignIn } from "@clerk/clerk-react";

import { useEffect, useState, useTransition } from "react";

import { useNavigate } from "react-router-dom";

export const useLoginForm = ({ isPersist }: { isPersist: boolean }) => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [isPending, startTransition] = useTransition();
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const { isLoaded, signIn, setActive } = useSignIn();

  useEffect(() => {
    const persistId = localStorage.getItem("persist-id");
    setId(persistId ?? "");
  }, []);

  useEffect(() => {
    setIsError(false);
    setErrMsg("");
  }, [id, password]);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleLogin = async () => {
    if (!isLoaded) return;

    try {
      const result = await signIn?.create({
        identifier: id,
        password,
      });

      if (result?.status === "complete") {
        await setActive!({ session: result.createdSessionId });

        if (isPersist) {
          localStorage.setItem("persist-id", id);
        }

        navigate("/");
      }
    } catch (err: any) {
      setIsError(true);
      setErrMsg("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    startTransition(() => {
      handleLogin();
    });
  };

  return {
    id,
    handleIdChange,
    password,
    handlePasswordChange,
    isPending,
    isError,
    errMsg,
    onSubmit,
  };
};
