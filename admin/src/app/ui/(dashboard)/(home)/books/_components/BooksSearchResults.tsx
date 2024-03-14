"use client";

import PaginateControl from "../../_components/PaginateControl";
import BookTable from "./BookTable";
import FilterBooks from "./FilterBooks";

import styles from "./book-search.module.css";

export default function BooksSearchResults() {
  const temporaryBook: IBook = {
    _id: "mongo_id",
    representImg:
      "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791198356680.jpg",
    category: "인문",
    parentCategory: "국내도서",
    title: "[뇌건강] 스스로 치유하는 뇌",
    author: "노먼 도이치",
    discount: 17,
    price: 19600,
    unit: "원",
    comment: "뇌의 변화를 통한 놀라운 치유",
    desc: "우리의 뇌는 당신의 생각보다 유연하다",
    publisher: "동아시아",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const books = [...Array.from({ length: 8 })].map((_, i) => {
    temporaryBook._id = temporaryBook._id + 1;

    return temporaryBook;
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>도서 목록</h1>
        <FilterBooks />
        <BookTable books={books as IBook[]} isLoading={false} />
        <PaginateControl pageTotal={69} />
      </div>
    </div>
  );
}
