import { useEffect, useState } from "react";

import Label from "../_components/Label";
import Input from "../_components/Input";
import Button from "../_components/Button";
import Error from "../_components/Error";

import { MdClose } from "react-icons/md";

type VerifyEmailProps = {
  email: string;
  verificationCode: string;
  onChangeVerificationCode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  startEmailVerification: () => Promise<boolean | undefined>;
  handleVerify: () => Promise<void>;
  isError: boolean;
  errMsg: string;
  isVerified: boolean;
};

export default function VerifyEmail({
  email,
  verificationCode,
  onChangeVerificationCode,
  startEmailVerification,
  handleVerify,
  isError,
  errMsg,
  isVerified,
}: VerifyEmailProps) {
  const [show, setShow] = useState(false);

  const onStartVerify = async () => {
    setShow(true);

    const isSuccess = await startEmailVerification();

    if (isSuccess) {
      setTimeout(() => {
        setShow(false);
      }, 180000);
    }

    if (isError) {
      return setShow(false);
    }
  };

  const completeVerify = async () => {
    await handleVerify();

    if (!isVerified) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (isError) {
      setShow(false);
    }
  }, [isError]);

  return (
    <div className="email-verification">
      <div className="email-verification__wrap">
        <div className="email-verification__brad-crumbs">
          <div className="title-wrap">
            <h1>계정 이메일 인증</h1>
          </div>
          <p>효율적인 계정관리를 위해 이메일 인증을 마쳐주세요.</p>
          <button>
            <MdClose className="icon" />
          </button>
        </div>
        <div className="email-verification__prepare">
          <Label text="등록된 이메일" />
          <div className="horizontal">
            <Input
              disabled
              type="email"
              name="email"
              value={email}
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
        {show && (
          <>
            <div className="email-verification__complete">
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
                onClick={completeVerify}
                disabled={false}
                className="register-sm-btn"
              />
            </div>
            <p className="desc">
              이메일을 확인하여 3분 안에 인증을 진행 해주세요.
            </p>
          </>
        )}
        {isError && <Error msg={errMsg} />}
      </div>
    </div>
  );
}
