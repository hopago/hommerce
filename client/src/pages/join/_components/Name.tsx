import Input from "./Input";
import Label from "./Label";

type NameProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  firstName: string;
  lastName: string;
};

export default function Name({ onChange, firstName, lastName }: NameProps) {
  return (
    <>
      <Label text="성" />
      <Input
        type="text"
        name="firstName"
        value={firstName}
        onChange={onChange}
        placeholder="성을 입력해주세요."
      />
      <Label text="이름" />
      <Input
        type="text"
        name="lastName"
        value={lastName}
        onChange={onChange}
        placeholder="이름을 입력해주세요."
      />
    </>
  );
}
