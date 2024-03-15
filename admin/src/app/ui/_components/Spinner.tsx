import styles from "./spinner.module.css";

import { FaSpinner } from "react-icons/fa";

export default function Spinner({ text }: { text?: string }) {
  return (
    <div className={styles.spinner}>
      <FaSpinner className={styles.loadingIcon} />
      {text && <span>{text}</span>}
    </div>
  );
}
