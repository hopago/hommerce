"use client";

import styles from "./input.module.css";

type InputProps = {
  type: "text";
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  type,
  placeholder,
  onChange,
  value,
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={styles.input}
      onChange={onChange}
    />
  );
}
