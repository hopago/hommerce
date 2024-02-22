import { useClerk } from "@clerk/clerk-react";

import { FormEvent, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useEmailVerification } from "./use-email-verification";

const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// 최소 8자리, 대소문자, 숫자, 특수문자 포함
const validatePassword = (password: string) => {
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(password);
};

export const useRegisterForm = () => {
  const { client } = useClerk();

  const navigate = useNavigate();

  // user-input
  const [user, setUser] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "password" && !validatePassword(value)) {
      setErrMsg(
        "비밀번호는 최소 8자리, 대소문자, 숫자, 특수문자를 포함해야 합니다."
      );
      setIsError(true);
    } else {
      setUser((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // match-pwd
  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);

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

  // email-input
  const [emailAddress, setEmailAddress] = useState("");
  const [emailVerificationCode, setEmailVerificationCode] = useState("");

  const onChangeEmailAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailAddress(e.target.value);
  };
  const onChangeEmailVerificationCode = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEmailVerificationCode(e.target.value);
  };

  const checkValidEmailAddress = (email: string) => {
    if (!validateEmail(email)) {
      setIsError(true);
      setErrMsg("유효하지 않은 이메일 주소입니다.");
    } else {
      setEmailAddress(email);
    }
  };

  // result-state
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const { startEmailVerification, completeEmailVerification, isSuccess } =
    useEmailVerification({
      onError: (msg: string) => {
        setIsError(true);
        setErrMsg(msg);
      },
    });

  // function
  const handleStartEmailVerification = async () => {
    await startEmailVerification();
  };
  const handleCompleteEmailVerification = async () => {
    await completeEmailVerification(emailVerificationCode);
  };

  const handleRegisterMongoDB = async () => {
    try {
      // TODO: MongoDB 저장
    } catch (err) {
      // TODO: 에러 메시지 + clerk-sign-up undo
    }
  };

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Failed Email Verification
    if (!isSuccess) return;

    setIsLoading(true);
    try {
      await client.signUp.create({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        password: user.password,
        emailAddress,
      });
      await handleRegisterMongoDB();

      navigate("/login");
    } catch (err: unknown) {
      setIsError(true);
      setErrMsg("회원가입 실패입니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    user,
    handleUserInput,
    matchPassword,
    onChangeMatchPassword,
    isMatchedPassword,
    validMatch,
    handleStartEmailVerification,
    handleCompleteEmailVerification,
    handleRegister,
    emailAddress,
    onChangeEmailAddress,
    emailVerificationCode,
    onChangeEmailVerificationCode,
    checkValidEmailAddress,
    isLoading,
    isError,
    errMsg,
  };
};
