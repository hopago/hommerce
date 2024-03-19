import { translateFieldTitleToKor } from "../utils/translateFieldValueToKor";

import styles from "./book-info.module.css";

type BookInfoDetailsTextProps = {
  title: string;
  value: string | number;
};

export default function BookInfoDetailsText({
  title,
  value,
}: BookInfoDetailsTextProps) {
  const filterValue = (
    value: string | number | BookParentCategoryList
  ): string | null => {
    if (typeof value === "number") {
      return value.toLocaleString();
    } else if (typeof value === "string") {
      return value;
    } else if (Array.isArray(value) && value.length) {
      return value.join(", ");
    }
    return null;
  };

  return (
    <div className={styles.infoTextContainer}>
      <h3>{translateFieldTitleToKor(title)}</h3>
      <p>{filterValue(value)}</p>
    </div>
  );
}
