import { RequestInfo } from "../../../types/api-specs";

import styles from "../api-modal.module.css";

import ParamsInfo from "./ParamsInfo";

type ParamsProps = {
  params?: RequestInfo;
  query?: RequestInfo;
};

export default function Params({ params, query }: ParamsProps) {
  return (
    <div className={styles.params}>
      {params && <ParamsInfo params={params} title="파라미터" />}
      {query && <ParamsInfo params={query} title="쿼리" />}
    </div>
  );
}
