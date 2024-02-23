import { useRegisterForm } from "../hooks/use-register-form";
import Button from "./Button";

import Email from "./Email";
import Error from "./Error";
import MatchPassword from "./MatchPassword";
import Name from "./Name";
import Password from "./Password";
import UserName from "./UserName";

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
    isValidEmail,
    isVerified,
    emailVerificationCode,
    onChangeEmailVerificationCode,
    handleStartEmailVerification,
    handleCompleteEmailVerification,
    isLoading,
    errMsg,
    isError,
  } = useRegisterForm();

  return (
    <form onSubmit={handleRegister} className="register-page__register-form">
      <UserName handleUserInput={handleUserInput} value={user.username} />
      <Password handleUserInput={handleUserInput} value={user.password} />
      <MatchPassword value={matchPassword} onChange={onChangeMatchPassword} />
      <Name
        onChange={handleUserInput}
        firstName={user.firstName}
        lastName={user.lastName}
      />
      <Email
        email={emailAddress}
        onChangeEmail={onChangeEmailAddress}
        verificationCode={emailVerificationCode}
        onChangeVerificationCode={onChangeEmailVerificationCode}
        handleStartEmailVerification={handleStartEmailVerification}
        handleCompleteEmailVerification={handleCompleteEmailVerification}
        isError={isError}
        errMsg={errMsg}
        isValid={isValidEmail}
        isVerified={isVerified}
      />
      <Button
        type="submit"
        text="가입하기"
        disabled={!validMatch || !isValidEmail || isLoading || !isVerified}
        className="register-submit-btn"
      />
      {isError && <Error msg={errMsg} />}
    </form>
  );
}
