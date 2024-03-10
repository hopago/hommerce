import styles from "./update-user-form.module.css";

import Input from "../../../../_components/Input";
import Label from "../../../../_components/Label";
import Button from "../../../../_components/Button";
import SelectForm from "./SelectForm";

import {
  USER_DETAIL_BUTTON,
  USER_DETAIL_LABEL,
  USER_DETAIL_INPUT,
} from "../../../../constants/classNames";

import { changeTitleToKor } from "../utils/changeTitleToKor";

import { Skeleton } from "@nextui-org/react";
import { cn } from "@/app/ui/lib/utils";

export type UiType = "select" | "default";

type InputNameType = "grade" | "username" | "email" | "status";

type UpdateUserFormProps = {
  title: string;
  uiType: UiType;
  inputName: InputNameType;
  value: string | UserGrade | UserStatus;
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
  const renderInputComponent = () => {
    switch (uiType) {
      case "select":
        return (
          <SelectForm
            inputName={inputName as "grade" | "status"}
            value={value as UserGrade | UserStatus}
          />
        );
      default:
        return (
          <Input
            type={inputName === "email" ? "email" : "text"}
            name={inputName}
            placeholder={`${changeTitleToKor(inputName)} 변경하기`}
            className={USER_DETAIL_INPUT}
            onChange={onChange}
            value={value}
          />
        );
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.inputWrap}>
        <Label text={title} className={USER_DETAIL_LABEL} />
        {renderInputComponent()}
      </div>
      <div className={styles.buttonWrap}>
        <Button
          type="submit"
          text="변경하기"
          className={USER_DETAIL_BUTTON}
          disabled={isLoading}
          ariaLabel="변경하기"
        />
      </div>
    </form>
  );
}

export const UpdateUserFormSkeleton = () => {
  return (
    <div className={styles.form}>
      <div className={styles.inputWrap}>
        <Skeleton className={cn("skeleton", styles.labelSkeleton)} />
        <Skeleton className={cn("skeleton", styles.inputSkeleton)} />
      </div>
      <div className={styles.buttonWrap}>
        <Skeleton className={cn("skeleton", styles.buttonSkeleton)} />
      </div>
    </div>
  );
};