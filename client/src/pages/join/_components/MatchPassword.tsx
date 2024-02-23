import Input from "./Input";
import Label from "./Label";

type MatchPasswordProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function MatchPassword({ value, onChange }: MatchPasswordProps) {
  return (
    <>
      <Label text="비밀번호 재입력" />
      <Input
        type="password"
        name="password"
        value={value}
        placeholder="비밀번호를 입력하세요."
        onChange={onChange}
      />
    </>
  );
}
