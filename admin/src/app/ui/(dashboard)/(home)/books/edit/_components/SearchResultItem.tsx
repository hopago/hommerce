import Image from "next/image";

import styles from "./book-search-input.module.css";

import { MdAdd } from "react-icons/md";

import { useRouter } from "next/navigation";

type SearchResultItemProps = {
  book: IBook;
};

export default function SearchResultItem({ book }: SearchResultItemProps) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/books/edit/${book._id}`);
  };

  return (
    <li className={styles.searchResultItem} onClick={onClick}>
      <Image
        src={book.representImg}
        alt="book-image"
        width={48}
        height={96}
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
