import styles from "./book-info.module.css";

type BookInsideProps = {
  bookInside: string;
};

export default function BookInside({ bookInside }: BookInsideProps) {
  return (
    <div className={styles.detailsInfoContainer}>
      <h3>책 속으로</h3>
      <p>{bookInside}</p>
    </div>
  );
}
