import Label from "../../../../_components/Label";
import Textarea from "../../../../_components/Textarea";

import { translateFieldNameToKor } from "../utils/translateFieldNameToKor";

import { TextareaKeys } from "./BookDetailsEdit";

type DetailsTextareaProps = {
  field: TextareaKeys;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function DetailsTextarea({
  field,
  value,
  handleChange,
}: DetailsTextareaProps) {
  return (
    <>
      <Label text={translateFieldNameToKor(field)!} />
      <Textarea
        name={field}
        onChange={handleChange}
        value={value}
        placeholder={`${translateFieldNameToKor(field)}을(를) 입력해주세요.`}
        required={true}
      />
    </>
  );
}
