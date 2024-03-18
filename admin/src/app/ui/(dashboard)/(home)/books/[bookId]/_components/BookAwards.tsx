import styles from "./book-info.module.css";

type BookAwardsProps = {
  awards: string[];
};

export default function BookAwards({ awards }: BookAwardsProps) {
  return (
    <div className={styles.detailsInfoContainer}>
      <h3>수상내역/미디어추천</h3>
      <div className={styles.detailsInfoTextsCol}>
        {awards.map((a) => (
          <p key={a}>{a}</p>
        ))}
      </div>
    </div>
  );
}
