import styles from "./update-user-form.module.css";

import Input from "../../../../_components/Input";
import Label from "../../../../_components/Label";
import SelectGradeForm from "./SelectGradeForm";

import { USER_DETAIL_LABEL } from "../../../../constants/classNames";
import { USER_DETAIL_INPUT } from "../../../../constants/classNames";
import { changeTitleToKor } from "../utils/changeTitleToKor";
import ChangePasswordForm from "./ChangePasswordForm";
import Button from "../../../../_components/Button";

export type UiType = "grade" | "default";

type InputNameType = "grade" | "username" | "email" | "status";

type UpdateUserFormProps = {
  title: string;
  uiType: UiType;
  inputName: InputNameType;
  value: string;
  onChange: () => void | ((e: React.ChangeEvent<HTMLInputElement>) => void);
  onSubmit: () => void | (() => Promise<void>);
  isLoading: boolean;
};

export default function UpdateUserForm({
  title,
  uiType,
  inputName,
  onChange,
  onSubmit,
  value,
  isLoading,
}: UpdateUserFormProps) {
  const inputComponents = {
    grade: SelectGradeForm,
    default: Input,
  };

  const InputField = inputComponents[uiType] || inputComponents.default;

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <Label text={title} className={USER_DETAIL_LABEL} />
      <InputField
        type={inputName === "email" ? "email" : "text"}
        name={inputName}
        placeholder={`${changeTitleToKor(inputName)} 변경하기`}
        className={USER_DETAIL_INPUT}
        onChange={onChange}
        value={value}
      />
      <Button
        type="submit"
        text="변경하기"
        disabled={isLoading}
        ariaLabel="변경하기"
      />
    </form>
  );
}
