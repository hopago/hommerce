import { useState } from "react";

import Button from "./Button";
import Input from "./Input";
import Label from "./Label";

type EmailProps = {
  email: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  verificationCode: string;
  onChangeVerificationCode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleStartEmailVerification: () => Promise<boolean | undefined>;
  handleCompleteEmailVerification: () => Promise<void>;
  isError: boolean;
  errMsg: string;
  isValid: boolean;
  isVerified: boolean;
};

export default function Email({
  email,
  onChangeEmail,
  verificationCode,
  onChangeVerificationCode,
  handleStartEmailVerification,
  handleCompleteEmailVerification,
  isError,
  errMsg,
  isValid,
  isVerified,
}: EmailProps) {
  const [show, setShow] = useState(false);

  const onStartVerify = async () => {
    if (isValid) {
      setShow(true);

      const isSuccess = await handleStartEmailVerification();

      if (isSuccess) {
        setTimeout(() => {
          setShow(false);
        }, 180000);
      }

      if (isError) {
        return setShow(false);
      }
    }
  };

  const onCompleteVerify = async () => {
    await handleCompleteEmailVerification();

    if (!isVerified) {
      setShow(false);
    }
  };

  return (
    <div className="register-page__register-form__email-form">
      <div className="email-verification-prepare">
        <Label text="본인 확인 이메일" />
        <div className="horizontal">
          <Input
            type="email"
            name="email"
            placeholder="이메일을 입력하세요."
            value={email}
            onChange={onChangeEmail}
          />
          <Button
            type="button"
            text="인증번호 받기"
            onClick={onStartVerify}
            disabled={show}
            className="register-sm-btn"
          />
        </div>
      </div>
      {!isValid && (
        <p className="warn">
          적합한 이메일 주소가 아닙니다.
          <br />
          정확한 이메일 주소를 입력해 주세요.
        </p>
      )}
      {show && (
        <div className="email-verification-complete">
          <div className="main-wrap">
            <Input
              type="text"
              name="verificationCode"
              placeholder="인증번호를 입력하세요."
              value={verificationCode}
              onChange={onChangeVerificationCode}
            />
            <Button
              type="button"
              text="인증 완료하기"
              onClick={onCompleteVerify}
              disabled={false}
              className="register-sm-btn"
            />
          </div>
          <p className="desc">
            이메일을 확인하여 3분 안에 인증을 진행 해주세요.
          </p>
        </div>
      )}
      {/* SERVER ERROR */}
      {isError && <p className="warn">{errMsg}</p>}
    </div>
  );
}
