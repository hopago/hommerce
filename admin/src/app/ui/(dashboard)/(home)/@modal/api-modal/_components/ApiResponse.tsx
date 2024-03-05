import { AxiosResponse } from "axios";

import styles from "../api-modal.module.css";

type ApiResponseProps = {
  data: unknown;
};

export default function ApiResponse({ data }: ApiResponseProps) {
  const formattedBody = JSON.stringify(data, null, 2);

  return (
    <div className={styles.response}>
      <div className={styles.titleWrap}>
        <h1>응답</h1>
      </div>
      <div className={styles.jsonContents}>
        {data ? (
          <pre className={styles.jsonContentsDetails}>{formattedBody}</pre>
        ) : (
          <span className={styles.noContent}>데이터가 현재 빈 값입니다.</span>
        )}
      </div>
    </div>
  );
}
