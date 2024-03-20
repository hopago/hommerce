import Image from "next/image";

import styles from "./book-info.module.css";

import BookInfoDetailsText from "./BookInfoDetailsText";
import BookInfoDetailsCard from "./BookInfoDetailsCard";
import BookInfoDetailsImages from "./BookInfoDetailsImages";

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
    }
    return null;
  };

  const renderOptionalDetails = () => {
    const filteredKeys = optionalFields.filter(
      (key) => book[key] !== undefined && book[key] !== null && book[key] !== ""
    );

    const cardDetails: JSX.Element[] = [];
    const otherDetails: JSX.Element[] = [];

    filteredKeys.forEach((key, i) => {
      if (key === "images") {
        otherDetails.push(
          <BookInfoDetailsImages
            key={`${key}-${i}`}
            title={key}
            images={book[key] as string[]}
          />
        );
      } else {
        cardDetails.push(
          <BookInfoDetailsCard key={key} title={key} value={book[key]} />
        );
      }
    });

    return (
      <>
        {cardDetails.length > 0 && (
          <div className={styles.cardDetailsContainer}>{cardDetails}</div>
        )}
        {otherDetails}
      </>
    );
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
            {renderOptionalDetails()}
          </div>
        </div>
      </div>
    </div>
  );
}
