import { ResponseType } from "../../../types/api-specs";

import styles from "../api-modal.module.css";

import ResponseItem from "./ResponseItem";

type ResponsesProps = {
  responses: ResponseType[];
};

export default function Responses({ responses }: ResponsesProps) {
  return (
    <div className={styles.responses}>
      <div className={styles.titleWrap}>
        <span className={styles.title}>응답값</span>
      </div>
      <div className={styles.responseContents}>
        <ul className={styles.scrollInner}>
          {responses.map((res) => (
            <ResponseItem key={res.code} code={res.code} desc={res.desc} />
          ))}
        </ul>
      </div>
    </div>
  );
}
