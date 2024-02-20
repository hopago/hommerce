import { TReview, TReviews } from "../types/review";

const review: TReview = {
  id: "1",
  buyWay: "종이책",
  bookId: "1",
  userId: "1",
  userName: "hopago",
  rating: "1",
  keyword: "쉬웠어요",
  desc: "철학에세이라고 해야 하나? 쇼펜하우어의 철학을 충실히 담은 것인지 조금 의심스럽다. 쇼펜하우어가 말한 <의지>란 칸트의 물자체와 비슷한 형이상학적 세계자체를 말하는 것인데 이 책에서 저자는 마치 인간의 삶에 대한 의지인 것 처럼 이야기하고 있다. 또한 군데군데 동어반복적인 표현으로 이건 또 뭔 소린가 하는 혼잣말을 여러번 하게 된다. 논리의 앞뒤가 잘 맞지 않는...",
  liked: 124,
  createdAt: new Date(),
  updatedAt: null,
};

export const reviews: TReviews = Array.from({ length: 5 }).map((_, i) => {
  return {
    ...review,
    id: (i + 1).toString(),
    bookId: (i + 1).toString(),
    userId: (i + 1).toString(),
  };
});

export const reviews2: TReviews = Array.from({ length: 5 }).map((_, i) => {
  return {
    ...review,
    id: (i + 6).toString(),
    bookId: (i + 6).toString(),
    userId: (i + 6).toString(),
  };
});
