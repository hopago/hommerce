import BookInfoDetails from "./BookInfoDetails";
import BookInfoHeader from "./BookInfoHeader";

import styles from "./book-info.module.css";

type BookInfoProps = {
  book: IBook;
};

export default function BookInfo({ book }: BookInfoProps) {
  return (
    <main className={styles.bookInfo}>
      <div className={styles.bookInfoWrap}>
        <BookInfoHeader />
        <BookInfoDetails book={book} />
      </div>
    </main>
  );
}
