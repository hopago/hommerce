import { cn } from "@/app/ui/lib/utils";

import styles from "./label.module.css";

import { USER_DETAIL_LABEL } from "../constants/classNames";

type LabelProps = {
  text: string;
  className?: string;
  htmlFor?: string;
};

export default function Label({ text, className, htmlFor }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        styles.label,
        className === USER_DETAIL_LABEL && styles.userDetail
      )}
    >
      {text}
    </label>
  );
}
