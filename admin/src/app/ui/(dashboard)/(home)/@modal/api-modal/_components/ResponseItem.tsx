import styles from "../api-modal.module.css";

import cn from "classnames";

import { getResponseStyle } from "../utils/getResponseStyle";

type ResponseItemProps = {
  desc: string;
  code: number;
};

export default function ResponseItem({ code, desc }: ResponseItemProps) {
  return (
    <li className={styles.responseList}>
      <div className={styles.responseListDetails}>
        <span className={cn(styles.responseListCode, getResponseStyle(code))}>
          {code}
        </span>
      </div>
      <div className={styles.responseListDesc}>
        <span>{desc}</span>
      </div>
    </li>
  );
}
