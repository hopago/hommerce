import { useEffect, useState } from "react";
import { useEmailVerification } from "./use-email-verification";

const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const useEmailForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [emailAddress, setEmailAddress] = useState("");
  const [emailVerificationCode, setEmailVerificationCode] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

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
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  useEffect(() => {
    if (emailAddress === "") return setIsValidEmail(true);

    const checkEmail = setTimeout(() => {
      checkValidEmailAddress(emailAddress);
    }, 300);

    return () => {
      clearTimeout(checkEmail);
    };
  }, [emailAddress]);

  const { startEmailVerification, completeEmailVerification, isVerified } =
    useEmailVerification({
      onStart: () => {
        setIsError(false);
        setErrMsg("");
      },
      onSuccess: () => {
        setIsSuccess(true);
      },
      onError: (msg: string) => {
        setIsError(true);
        setErrMsg(msg);
      },
    });

  const handleCompleteEmailVerification = async () => {
    await completeEmailVerification(emailVerificationCode);
  };

  return {
    startEmailVerification,
    handleCompleteEmailVerification,
    emailAddress,
    onChangeEmailAddress,
    checkValidEmailAddress,
    isValidEmail,
    isVerified,
    isSuccess,
    isError,
    errMsg,
    emailVerificationCode,
    onChangeEmailVerificationCode,
  };
};
