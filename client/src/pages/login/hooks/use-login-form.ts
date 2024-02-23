import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

export const useLoginForm = ({ isPersist }: { isPersist: boolean }) => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  // const [data, setData] = useState(null);
  // const [isPending, startTransition] = useTransition();

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
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // startTransition(() => {
    // TODO: 비동기 처리
    // });

    if (isPersist) {
      localStorage.setItem("persist-id", id);
    }
    navigate("/");
  };

  return {
    id,
    handleIdChange,
    password,
    handlePasswordChange,
    isError,
    errMsg,
    onSubmit,
  };
};
