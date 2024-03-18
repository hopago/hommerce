import styles from "./book-info.module.css";

type BookIntroProps = {
  intro: string;
};

export default function BookIntro({ intro }: BookIntroProps) {
  return (
    <div className={styles.detailsInfoContainer}>
      <h3>도서 소개문구</h3>
      <p>{intro}</p>
    </div>
  );
}
