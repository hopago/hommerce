import { atom, selector } from "recoil";

export type ReviewSortOptions = "좋아요 순" | "최신 순";

export const reviewSortOptionsState = atom<ReviewSortOptions>({
  key: "reviewSortOptionsState",
  default: "좋아요 순",
});

export const setReviewSortOptionsState = selector({
  key: "setReviewSortOptionsState",
  get: ({ get }) => get(reviewSortOptionsState),
  set: ({ set, get }, currTab) => {
    if (currTab) {
      const currState = get(reviewSortOptionsState);
      if (currState !== currTab) {
        set(reviewSortOptionsState, currTab);
      }
    }
  },
});
