import { translateFieldTitleToKor } from "../utils/translateFieldValueToKor";
import styles from "./book-info.module.css";

type BookInfoDetailsTextProps = {
  title: string;
  value: string;
};

export default function BookInfoDetailsText({
  title,
  value,
}: BookInfoDetailsTextProps) {
  return (
    <div className={styles.infoTextContainer}>
      <h3>{translateFieldTitleToKor(title)}</h3>
      <p>{value}</p>
    </div>
  );
}
