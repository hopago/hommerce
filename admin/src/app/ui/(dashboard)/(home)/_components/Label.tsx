import { cn } from "@/app/ui/lib/utils";

import styles from "./label.module.css";

type LabelProps = {
  text: string;
  className?: string;
  htmlFor?: string;
};

export default function Label({ text, className, htmlFor }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={cn(styles.label)}>
      {text}
    </label>
  );
}
