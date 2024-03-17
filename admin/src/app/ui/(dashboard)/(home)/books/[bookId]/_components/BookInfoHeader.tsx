import BookInfoHeaderButton from "./BookInfoHeaderButton";

import styles from "./book-info.module.css";

export default function BookInfoHeader() {
  return (
    <div className={styles.bookInfoHeader}>
      <div className={styles.headerTitle}>
        <div className={styles.fill} />
        <h1>도서 기본정보</h1>
      </div>
      <BookInfoHeaderButton />
    </div>
  );
}
