import styles from "./book-info.module.css";

type BookContentListProps = {
  contentList: string;
};

export default function BookContentList({ contentList }: BookContentListProps) {
  return (
    <div className={styles.detailsInfoContainer}>
      <h3>목차</h3>
      <p style={{ whiteSpace: "pre-wrap" }}>{contentList}</p>
    </div>
  );
}
