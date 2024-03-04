import styles from "./api-services.module.css";

type PathnameProps = {
  path: string;
};

export default function Pathname({ path }: PathnameProps) {
  return <span className={styles.pathname}>{path}</span>;
}
