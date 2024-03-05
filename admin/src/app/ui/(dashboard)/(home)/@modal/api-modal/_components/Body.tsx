import styles from "../api-modal.module.css";

type BodyProps = {
  body: {
    value: unknown;
    required: boolean;
  };
};

export default function Body({ body }: BodyProps) {
  const formattedBody = JSON.stringify(body?.value, null, 2);

  return (
    <div className={styles.body}>
      <div className={styles.titleWrap}>
        <span className={styles.title}>요청 본문</span>
      </div>
      <div className={styles.contents}>
        <div className={styles.jsonContents}>
          <pre className={styles.jsonContentsDetails}>{formattedBody}</pre>
        </div>
        {body.required && <span className={styles.required}>필수</span>}
      </div>
    </div>
  );
}
