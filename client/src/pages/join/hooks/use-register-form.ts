import { useClerk } from "@clerk/clerk-react";

import { FormEvent, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useEmailVerification } from "./use-email-verification";

export const useRegisterForm = () => {
  const { client } = useClerk();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [emailVerificationCode, setEmailVerificationCode] = useState("");

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
        firstName,
        lastName,
        username,
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
    username,
    setUsername,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    handleStartEmailVerification,
    handleCompleteEmailVerification,
    handleRegister,
    emailAddress,
    setEmailAddress,
    emailVerificationCode,
    setEmailVerificationCode,
    isLoading,
    isError,
    errMsg,
  };
};
