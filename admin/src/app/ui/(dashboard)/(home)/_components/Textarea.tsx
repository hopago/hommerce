"use client";

import { cn } from "@/app/ui/lib/utils";

import styles from "./textarea.module.css";

type TextareaProps = {
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: "prepare" | string;
  required?: boolean;
};

export default function Textarea({
  placeholder,
  onChange,
  value,
  className,
  required,
}: TextareaProps) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      className={cn(styles.textarea, className === "prepare" && styles.prepare)}
      onChange={onChange}
      required={required}
    />
  );
}
