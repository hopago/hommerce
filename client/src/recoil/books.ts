import { atom, selectorFamily } from "recoil";

/* TEMPORARY BOOK DATA */

const temporaryBook: TBook = {
  id: 1,
  img: "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791198356680.jpg",
  category: "인문",
  parentCategory: "국내도서",
  title: "[뇌건강] 스스로 치유하는 뇌",
  author: "노먼 도이치",
  discount: "17%",
  price: "19,600",
  unit: "원",
  comment: "뇌의 변화를 통한 놀라운 치유",
  desc: "우리의 뇌는 당신의 생각보다 유연하다",
  publisher: "동아시아",
};

export const books: TBooks = [...Array.from({ length: 10 })].map((_, i) => {
  const book = { ...temporaryBook };
  book.id = i;
  return book;
});

export const temporaryBestSeller: TBookShortcut = {
  id: 1,
  title: "데일 카네기 인간관계론",
  img: "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791187142560.jpg",
  author: "데일 카네기",
  category: "현대지성",
};

export const temporaryBestSellers: TBookShortcut[] = [
  ...Array.from({ length: 10 }),
].map((_, i) => {
  const book = { ...temporaryBestSeller };
  book.id = i;
  return book;
});

export const temporaryRecommendBook: TBookShortcut = {
  id: 1,
  title: "돈의 속성",
  img: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791188331796.jpg",
  author: "김승호",
  category: "경제/경영",
};

export const temporaryRecommendBooks: TBookShortcut[] = [
  ...Array.from({ length: 4 }),
].map((_, i) => {
  const book = { ...temporaryRecommendBook };
  book.id = i;
  return book;
});

const temporaryNewBook: TBookOptional = {
  id: 1,
  title: "데일 카네기 인간관계론",
  img: "https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791187142560.jpg",
  author: "데일 카네기",
  category: "현대지성",
  publisher: "요즘책방",
  discount: "10%",
  price: "10,350",
  unit: "원",
};

export const temporaryNewBooks: TBookOptional[] = [
  ...Array.from({ length: 6 }),
].map((_, i) => {
  const book = { ...temporaryNewBook };
  book.id = i;
  return book;
});

export const detailsBook: TBook = {
  id: 1,
  img: "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791192300818.jpg",
  parentCategory: "국내도서",
  category: "인문",
  title: "마흔에 읽는 쇼펜하우어",
  author: "강용수",
  discount: "10%",
  price: "17000",
  eBookPrice: "12150",
  unit: "원",
  publisher: "유노북스",
  sellType: ["종이책", "eBook"],
};

/* CLIENT STATE */

export const booksState = atom<TBooks>({
  key: "booksState",
  default: books,
});

export const currentBookState = atom<TBook>({
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
