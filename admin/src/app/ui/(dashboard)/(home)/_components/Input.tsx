"use client";

import { cn } from "@/app/ui/lib/utils";

import styles from "./input.module.css";

import { INPUT_CLASS } from "../constants/classNames";

type InputProps = {
  type: "text" | "password" | "email" | "number";
  value: string | number;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  className?: "prepare" | string;
  required?: boolean;
  disabled?: boolean;
};

export default function Input({
  type,
  placeholder,
  onChange,
  value,
  name,
  className,
  required,
  disabled,
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      className={cn(
        styles.input,
        className === INPUT_CLASS.API_PREPARE && styles.prepare,
        className === INPUT_CLASS.FILTER_REVIEW_INPUT && styles.filterReview,
        className === INPUT_CLASS.USER_SEARCH_INPUT && styles.userSearch
      )}
      onChange={onChange}
      required={required}
      spellCheck={false}
      autoComplete="off"
      disabled={disabled}
    />
  );
}
