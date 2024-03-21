import { useRegisterForm } from "../hooks/use-register-form";

import Button from "./Button";
import Error from "./Error";
import MatchPassword from "./MatchPassword";
import Name from "./Name";
import Password from "./Password";
import SetEmail from "./SetEmail";
import UserName from "./UserName";
import VerifyEmail from "../@modal/VerifyEmail";

export default function RegisterForm() {
  const {
    user,
    handleRegister,
    handleUserInput,
    onChangeMatchPassword,
    matchPassword,
    validMatch,
    emailAddress,
    onChangeEmailAddress,
    isSignup,
    isValidEmail,
    isVerified,
    isLoading,
    errMsg,
    isError,
    emailVerificationCode,
    onChangeEmailVerificationCode,
    startEmailVerification,
    handleVerify,
    isVerifyError,
    verifyErrMsg,
  } = useRegisterForm();

  return (
    <>
      <form onSubmit={handleRegister} className="register-page__register-form">
        <UserName handleUserInput={handleUserInput} value={user.username} />
        <Password handleUserInput={handleUserInput} value={user.password} />
        <MatchPassword value={matchPassword} onChange={onChangeMatchPassword} />
        <Name
          onChange={handleUserInput}
          firstName={user.firstName}
          lastName={user.lastName}
        />
        <SetEmail
          email={emailAddress}
          onChangeEmail={onChangeEmailAddress}
          isValid={isValidEmail}
        />
        <Button
          type="submit"
          text="가입하기"
          disabled={!validMatch || !isValidEmail || isLoading}
          className="register-submit-btn"
        />
        {isError && <Error msg={errMsg} />}
      </form>
      {isSignup && (
        <VerifyEmail
          email={emailAddress}
          verificationCode={emailVerificationCode}
          onChangeVerificationCode={onChangeEmailVerificationCode}
          startEmailVerification={startEmailVerification}
          handleVerify={handleVerify}
          isVerified={isVerified}
          errMsg={verifyErrMsg}
          isError={isVerifyError}
        />
      )}
    </>
  );
}
