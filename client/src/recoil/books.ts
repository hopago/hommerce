import { atom, selectorFamily } from "recoil";

const temporaryBook = {
  id: 1,
  img: "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791198356680.jpg",
  category: "eBook",
  title: "[뇌건강] 스스로 치유하는 뇌",
  author: "노먼 도이치",
  discount: "17%",
  price: "19,600",
  unit: "원",
  comment: "뇌의 변화를 통한 놀라운 치유",
  desc: "우리의 뇌는 당신의 생각보다 유연하다",
};

const books = [...Array.from({ length: 10 })].map((_, i) => {
  const book = { ...temporaryBook };
  book.id = i;
  return book;
});

export const booksState = atom<typeof books>({
  key: "booksState",
  default: books,
});

export const currentBookState = atom<typeof temporaryBook>({
  key: "currentBookState",
  default: temporaryBook,
});

export const selectedCurrentBook = selectorFamily({
  key: "selectedCurrentBook",
  get:
    (index: number) =>
    ({ get }) => {
      const books = get(booksState);
      return books[index];
    },
  set:
    (index: number) =>
    ({ set, get }) => {
      const books = get(booksState);
      const currentBook = books[index];
      set(currentBookState, currentBook);
    },
});