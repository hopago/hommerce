import MethodBadge from "../../../_components/MethodBadge";
import { ApiMethod } from "../../../types/api-specs";

import styles from "../api-modal.module.css";

type MethodInfoProps = {
  method: ApiMethod;
};

export default function MethodInfo({ method }: MethodInfoProps) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.title}>
        <h1>메소드</h1>
      </div>
      <div className={styles.method}>
        <MethodBadge method={method} />
      </div>
    </div>
  );
}
