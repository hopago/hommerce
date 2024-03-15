import styles from "./spinner.module.css";

import { FaSpinner } from "react-icons/fa";

type SpinnerProps = {
  text?: string;
  stylesProps?: {
    color?: string;
    minHeight?: string;
  };
};

export default function Spinner({ text, stylesProps = {} }: SpinnerProps) {
  const { color, minHeight } = stylesProps;

  return (
    <div
      className={styles.spinner}
      style={{ minHeight, color }}
    >
      <FaSpinner
        className={styles.loadingIcon}
        style={{ color }}
      />
      {text && <span>{text}</span>}
    </div>
  );
}
