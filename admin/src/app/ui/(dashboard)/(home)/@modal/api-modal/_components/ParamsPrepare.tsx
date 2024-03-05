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
      {params && <ParamsInput info={params} requestInputType="path" />}
      {query && <ParamsInput info={query} requestInputType="query" />}
    </div>
  );
}
