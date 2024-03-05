import styles from "../api-modal.module.css";

import BodyInput from "./BodyInput";

type BodyPrepareProps = {
  body?: {
    value: unknown;
    required: boolean;
  };
};

export default function BodyPrepare({ body }: BodyPrepareProps) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.title}>
        <h1>요청 본문</h1>
      </div>
      {body ? <BodyInput body={body.value} required={body.required} /> : (
        <span className={styles.empty}>
          요청 본문이 필요하지 않습니다.
        </span>
      )}
    </div>
  );
}
