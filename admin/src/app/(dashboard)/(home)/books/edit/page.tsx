import styles from "@/app/ui/(dashboard)/(home)/books/edit/edit.module.css";

import Logo from "@/app/ui/(dashboard)/(home)/books/edit/_components/Logo";
import BookSearchInput from "@/app/ui/(dashboard)/(home)/books/edit/_components/BookSearchInput";

export default function GetBookIdPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <Logo />
        <BookSearchInput />
      </div>
    </div>
  );
}
