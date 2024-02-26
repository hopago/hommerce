import { useEffect, useRef } from "react";

import Button from "./Button";
import Input from "./Input";

import { useLoginForm } from "../hooks/use-login-form";

import { MdInfoOutline } from "react-icons/md";

type FormProps = {
  isPersist: boolean;
};

export default function Form({ isPersist }: FormProps) {
  const {
    onSubmit,
    handleIdChange,
    handlePasswordChange,
    id,
    password,
    isPending,
    isError,
    errMsg,
  } = useLoginForm({ isPersist });

  const idRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (idRef.current !== null) {
      idRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (isError && idRef.current !== null) {
      errRef.current?.focus();
    }
  }, [isError]);

  return (
    <form onSubmit={onSubmit}>
      <Input
        ref={idRef}
        placeholder="아이디를 입력해 주세요."
        type="text"
        onChange={handleIdChange}
        value={id}
      />
      <Input
        placeholder="비밀번호를 입력해 주세요."
        type="password"
        onChange={handlePasswordChange}
        value={password}
      />
      {isError && (
        <p ref={errRef} className="login-err-message">
          <MdInfoOutline />
          <span>{errMsg}</span>
        </p>
      )}
      <Button
        className="login"
        text="로그인"
        type="submit"
        disabled={isPending}
      />
    </form>
  );
}
