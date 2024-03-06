import { useBodyInput } from "@/app/store/use-body-input";

import styles from "../api-modal.module.css";

type BodyProps = {
  body: {
    value: unknown;
    required: boolean;
  };
};

export default function Body({ body }: BodyProps) {
  // TODO: body value 그대로가 아닌 input field의 값을 보여줘야함
  const { parsedValue } = useBodyInput();

  const formattedBody = JSON.stringify(parsedValue ?? body?.value, null, 2);

  return (
    <div className={styles.body}>
      <div className={styles.titleWrap}>
        <span className={styles.title}>요청 본문</span>
        {body.required && <span className={styles.required}>*필수</span>}
      </div>
      <div className={styles.contents}>
        <div className={styles.jsonContents}>
          <pre className={styles.jsonContentsDetails}>{formattedBody}</pre>
        </div>
      </div>
    </div>
  );
}
