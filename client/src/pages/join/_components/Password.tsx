import Input from "./Input";
import Label from "./Label";

type PasswordProps = {
  handleUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export default function Password({ handleUserInput, value }: PasswordProps) {
  return (
    <>
      <Label text="비밀번호" />
      <Input
        type="password"
        name="password"
        value={value}
        placeholder="비밀번호를 입력하세요."
        onChange={handleUserInput}
      />
    </>
  );
}
