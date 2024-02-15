import { atom, selector } from "recoil";

export const amountState = atom<number>({
  key: "amountState",
  default: 1,
});

export const setAmountState = selector({
  key: "setAmountState",
  get: ({ get }) => get(amountState),
  set: ({ set, get }, direction) => {
    if (direction === 1) {
      const currState = get(amountState);
      set(amountState, currState + 1);
    } else {
      const currState = get(amountState);
      set(amountState, currState - 1);
    }
  },
});
