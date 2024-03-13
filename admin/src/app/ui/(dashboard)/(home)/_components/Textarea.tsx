"use client";

import { cn } from "@/app/ui/lib/utils";

import styles from "./textarea.module.css";
import { INPUT_CLASS } from "../constants/classNames";

type TextareaProps = {
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: "prepare" | string;
  required?: boolean;
  error?: boolean;
};

export default function Textarea({
  placeholder,
  onChange,
  value,
  className,
  required,
  error,
}: TextareaProps) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      className={cn(
        styles.textarea,
        className === INPUT_CLASS.API_PREPARE && styles.prepare,
        error && "error"
      )}
      onChange={onChange}
      required={required}
      spellCheck={false}
      autoComplete="off"
    />
  );
}
