import Input from "./Input";
import Label from "./Label";

type UserNameProps = {
  handleUserInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export default function UserName({ handleUserInput, value }: UserNameProps) {
  return (
    <>
      <Label text="유저명" />
      <Input
        type="text"
        value={value}
        placeholder="유저명을 입력하세요."
        name="username"
        onChange={handleUserInput}
      />
    </>
  );
}
