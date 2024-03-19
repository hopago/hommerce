import Link from "next/link";

import styles from "./book-edit-header.module.css";

import { MdArrowBack } from "react-icons/md";

export default function BookEditHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/books">
          <MdArrowBack size={21} />
        </Link>
        <h1>도서 정보 수정</h1>
      </div>
    </div>
  );
}
