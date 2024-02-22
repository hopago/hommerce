import { useClerk } from "@clerk/clerk-react";
import { useState } from "react";

type UseEmailVerificationParams = {
  onError: (msg: string) => void;
};

export const useEmailVerification = ({
  onError,
}: UseEmailVerificationParams) => {
  const { client } = useClerk();

  const [isSuccess, setIsSuccess] = useState(false);

  const startEmailVerification = async () => {
    try {
      await client.signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      setIsSuccess(true);
    } catch (err) {
      onError("이메일을 전송하지 못했습니다. 다시 시도해주세요.");
    }
  };

  const completeEmailVerification = async (code: string) => {
    try {
      await client.signUp.attemptEmailAddressVerification({ code });
      setIsSuccess(true);
    } catch (err) {
      onError("잘못된 인증 코드입니다. 다시 시도해주세요.");
    }
  };

  return {
    isSuccess,
    startEmailVerification,
    completeEmailVerification,
  };
};
