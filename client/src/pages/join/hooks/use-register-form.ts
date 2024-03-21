import { useClerk, useUser } from "@clerk/clerk-react";

import { FormEvent, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useEmailForm } from "./use-email-form";
import { restFetcher } from "../../../fetcher/restFetcher";
import { toast } from "sonner";

// 최소 8자리, 대소문자, 숫자, 특수문자 포함
const validatePassword = (password: string) => {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(password);
};

export const useRegisterForm = () => {
  const { client } = useClerk();

  const navigate = useNavigate();

  // result-state
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  // user-input
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  // email-state
  const {
    emailAddress,
    isValidEmail,
    isVerified,
    onChangeEmailAddress,
    emailVerificationCode,
    onChangeEmailVerificationCode,
    handleCompleteEmailVerification,
    startEmailVerification,
    isError: isVerifyError,
    isSuccess: isVerifySuccess,
    errMsg: verifyErrMsg,
  } = useEmailForm();

  // match-pwd
  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setErrMsg("");
    setIsError(false);

    if (name === "password" && !validatePassword(value)) {
      setErrMsg(
        "비밀번호는 최소 8자리, 대소문자, 숫자, 특수문자를 포함해야 합니다."
      );
      setIsError(true);
    }

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChangeMatchPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMatchPassword(e.target.value);
  };

  const isMatchedPassword = () => {
    if (matchPassword === user.password) {
      setValidMatch(true);
    } else {
      setValidMatch(false);
    }
  };

  useEffect(() => {
    isMatchedPassword();

    if (validMatch) {
      setIsError(false);
      setErrMsg("");
    } else {
      setIsError(true);
      setErrMsg("비밀번호가 일치하지 않습니다.");
    }
  }, [matchPassword, validMatch]);

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsError(false);
    setErrMsg("");

    if (!validMatch) return;

    setIsLoading(true);
    try {
      await client.signUp.create({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        emailAddress,
      });

      setIsSignup(true);
    } catch (err: unknown) {
      setIsError(true);
      setErrMsg("회원가입 실패입니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerify = async () => {
    try {
      await handleCompleteEmailVerification();

      navigate("/join/success");
    } catch (err) {
      const { user } = useUser();
      if (user) {
        try {
          await restFetcher({
            path: `/user/${user.id}`,
            method: "DELETE",
          });
        } catch (err) {
          toast.error("서버 오류입니다. 잠시 후 다시 시도해주세요.");
        } finally {
          navigate("/join/failure");
        }
      }
    }
  };

  return {
    user,
    handleUserInput,
    matchPassword,
    onChangeMatchPassword,
    isMatchedPassword,
    validMatch,
    emailAddress,
    onChangeEmailAddress,
    isValidEmail,
    handleRegister,
    isSignup,
    isVerified,
    isLoading,
    isError,
    errMsg,
    emailVerificationCode,
    onChangeEmailVerificationCode,
    startEmailVerification,
    isVerifyError,
    isVerifySuccess,
    verifyErrMsg,
    handleVerify,
  };
};
