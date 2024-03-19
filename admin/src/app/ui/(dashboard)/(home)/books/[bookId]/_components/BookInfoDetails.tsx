import Image from "next/image";

import styles from "./book-info.module.css";

import BookInfoDetailsText from "./BookInfoDetailsText";
import BookInfoDetailsCard from "./BookInfoDetailsCard";

type BookInfoDetailsProps = {
  book: IBook;
};

export const requiredFields = [
  "title",
  "price",
  "author",
  "publisher",
  "parentCategory",
  "category",
  "desc",
];
export const optionalFields = [
  "images",
  "discount",
  "eBookPrice",
  "comment",
  "sellType",
];

export default function BookInfoDetails({ book }: BookInfoDetailsProps) {
  const renderBookDetails = (key: string) => {
    const valueExists =
      book[key] !== undefined && book[key] !== null && book[key] !== "";

    if (requiredFields.includes(key) && valueExists) {
      return <BookInfoDetailsText key={key} title={key} value={book[key]} />;
    } else if (optionalFields.includes(key) && valueExists) {
      return <BookInfoDetailsCard key={key} title={key} value={book[key]} />;
    }

    return null;
  };

  return (
    <div className={styles.bookInfoDetails}>
      <Image
        src={book.representImg}
        alt={`${book.title}-image`}
        width={200}
        height={300}
        className={styles.bookImg}
      />
      <div className={styles.bookInfoDetailsTexts}>
        <h2>{book.title}</h2>
        <div className={styles.bookDesc}>
          <div className={styles.bookDescFlexWrap}>
            {Object.keys(book).map((key) => renderBookDetails(key))}
          </div>
        </div>
      </div>
    </div>
  );
}
