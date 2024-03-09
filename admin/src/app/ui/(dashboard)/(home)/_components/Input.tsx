"use client";

import { cn } from "@/app/ui/lib/utils";

import styles from "./input.module.css";

import { API_PREPARE_INPUT, USER_SEARCH_INPUT } from "../constants/classNames";

type InputProps = {
  type: "text" | "password" | "email";
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  className?: "prepare" | string;
  required?: boolean;
};

export default function Input({
  type,
  placeholder,
  onChange,
  value,
  name,
  className,
  required,
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      className={cn(
        styles.input,
        className === API_PREPARE_INPUT && styles.prepare,
        className === USER_SEARCH_INPUT && styles.userSearch
      )}
      onChange={onChange}
      required={required}
      spellCheck={false}
      autoComplete="off"
    />
  );
}
