import Input from "./Input";
import Label from "./Label";

type SetEmailProps = {
  email: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
};

export default function SetEmail({
  email,
  onChangeEmail,
  isValid,
}: SetEmailProps) {
  return (
    <>
      <Label text="본인 확인 이메일" />
      <Input
        type="email"
        name="email"
        placeholder="이메일을 입력하세요."
        value={email}
        onChange={onChangeEmail}
      />
      {!isValid && (
        <p className="warn">
          유효하지 않은 이메일 주소입니다.
          <br />
          정확한 이메일 주소를 입력해주세요.
        </p>
      )}
    </>
  );
}
