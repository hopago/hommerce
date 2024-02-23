import { useClerk } from "@clerk/clerk-react";

import { useState } from "react";

type UseEmailVerificationParams = {
  onError: (msg: string) => void;
  onSuccess: () => void;
};

export const useEmailVerification = ({
  onError,
  onSuccess,
}: UseEmailVerificationParams) => {
  const { client } = useClerk();

  const [isVerified, setIsVerified] = useState(false);

  const startEmailVerification = async () => {
    try {
      const { status } = await client.signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      onSuccess();

      return status === "complete";
    } catch (err) {
      onError("이메일을 전송하지 못했습니다. 다시 시도해주세요.");
    }
  };

  const completeEmailVerification = async (code: string) => {
    try {
      await client.signUp.attemptEmailAddressVerification({ code });
      setIsVerified(true);
    } catch (err) {
      setIsVerified(false);
      onError("잘못된 인증 코드입니다. 다시 시도해주세요.");
    }
  };

  return {
    startEmailVerification,
    completeEmailVerification,
    isVerified,
  };
};
