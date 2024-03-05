import { RequestInfo } from "../../../types/api-specs";

import styles from "../api-modal.module.css";

type ApiDocsProps = {
  params: RequestInfo;
  title: "쿼리" | "파라미터";
};

const ParamsInfo = ({ params, title }: ApiDocsProps) => (
  <div className={styles.params}>
    <div className={styles.titleWrap}>
      <span className={styles.title}>{title}</span>
      {params.required && <span className={styles.required}>*필수</span>}
    </div>
    <div className={styles.contents}>
      <div className={styles.contentsHeader}>
        <span className={styles.contentsHeaderName}>값</span>
        <span className={styles.contentsHeaderDesc}>설명</span>
      </div>
      <div className={styles.contents}>
        <div className={styles.contentsDetails}>
          <span className={styles.contentsDetailsValue}>
            {params.value.name}
          </span>
          <span className={styles.contentsDetailsType}>
            {params.value.desc}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default ParamsInfo;
