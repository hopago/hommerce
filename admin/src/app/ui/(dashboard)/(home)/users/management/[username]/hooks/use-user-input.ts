import { useCallback, useEffect, useState } from "react";

import { useUserUpdateMutation } from "../services/use-user-update-mutation";

import { toast } from "sonner";

import { validateEmail } from "../constants/validate";

export type UseUserInputParams = {
  email: string;
  username: string;
};

export const useUserInput = ({ email, username }: UseUserInputParams) => {
  const [field, setField] = useState<Record<"username" | "email", string>>({
    username,
    email,
  });

  const [isValidEmail, setIsValidEmail] = useState(false);

  const checkValidEmailAddress = (email: string) => {
    if (!validateEmail(email)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
  };

  useEffect(() => {
    if (field.email === "" || field.email === undefined)
      return setIsValidEmail(true);

    const checkEmail = setTimeout(() => {
      checkValidEmailAddress(field.email!);
    }, 300);

    return () => {
      clearTimeout(checkEmail);
    };
  }, [field.email]);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setField((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const { mutateUserField, isPending } = useUserUpdateMutation();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (field.email.trim() === "" || field.username.trim() === "") {
      toast.error("적합한 유저 정보 타입이 아닙니다.");
      return;
    }

    if (!isValidEmail) {
      toast.error("적합한 이메일 형식이 아닙니다.");
      return;
    }

    const payload = {
      ...(field.username !== username && { username: field.username }),
      ...(field.email !== email && { email: field.email }),
    };

    mutateUserField({ ...payload });
  };

  return {
    username: field.username,
    email: field.email,
    onChange,
    onSubmit,
    isLoading: isPending,
  };
};
