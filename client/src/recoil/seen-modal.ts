import { DefaultValue, atom, selector } from "recoil";

export const showSeenModal = atom<boolean>({
  key: "seenModal",
  default: false,
});

export const seenModalState = selector({
  key: "toggleSeenModal",
  get: ({ get }) => get(showSeenModal),
  set: ({ set, get }, newValue) => {
    if (newValue instanceof DefaultValue) {
      const currState = get(showSeenModal);
      set(showSeenModal, !currState);
    } else {
      set(showSeenModal, newValue);
    }
  },
});
