import styles from "../api-modal.module.css";

type PathInfoProps = {
  path: string;
};

export default function PathInfo({ path }: PathInfoProps) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.title}>
        <h1>경로</h1>
      </div>
      <div className={styles.path}>
        <span className={styles.pathDesc}>{path}</span>
      </div>
    </div>
  );
}
