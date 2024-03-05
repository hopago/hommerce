import { RequestInfo } from "../../../types/api-specs";

import styles from "../api-modal.module.css";

import ParamsInput from "./ParamsInput";

type ParamsPrepareProps = {
  params?: RequestInfo;
  query?: RequestInfo;
};

export default function ParamsPrepare({ params, query }: ParamsPrepareProps) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.title}>
        <h1>파라미터</h1>
      </div>
      {params && <ParamsInput info={params} paramsType="path" />}
      {query && <ParamsInput info={query} paramsType="query" />}
      {!params && !query && (
        <span className={styles.empty}>파라미터가 필요하지 않습니다.</span>
      )}
    </div>
  );
}
