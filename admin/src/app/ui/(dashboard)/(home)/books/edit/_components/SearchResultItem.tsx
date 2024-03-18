import Image from "next/image";

import styles from "./book-search-input.module.css";

import { MdAdd } from "react-icons/md";

type SearchResultItemProps = {
  book: IBook;
};

export default function SearchResultItem({ book }: SearchResultItemProps) {
  const onClick = () => {};

  return (
    <li className={styles.container} onClick={onClick}>
      <Image
        src={book.representImg}
        alt="book-image"
        width={24}
        height={24}
        className={styles.bookImg}
      />
      <div className={styles.desc}>
        <span>{book.title}</span>
        <span>{book.author}</span>
      </div>
      <MdAdd size={16} />
    </li>
  );
}
