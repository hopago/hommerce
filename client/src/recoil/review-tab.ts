import { atom, selector } from "recoil";

export type ReviewTabList = "전체 리뷰" | "한달 후 리뷰";

export const reviewTabState = atom<ReviewTabList>({
  key: "reviewTabState",
  default: "전체 리뷰",
});

export const setReviewTabList = selector({
  key: "setReviewTabList",
  get: ({ get }) => get(reviewTabState),
  set: ({ set, get }, currTab) => {
    if (currTab) {
      const currState = get(reviewTabState);
      if (currState !== currTab) {
        set(reviewTabState, currTab);
      }
    }
  },
});
