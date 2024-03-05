import styles from "../api-modal.module.css";

type ResponseItemProps = {
  desc: string;
  code: number;
};

export default function ResponseItem({ code, desc }: ResponseItemProps) {
  return (
    <div className={styles.contents}>
      <div className={styles.contentsDetails}>
        <span className={styles.contentsDetailsValue}>{code}</span>
      </div>
      <div className={styles.contentsDetailsDesc}>
        <span>{desc}</span>
      </div>
    </div>
  );
}
