import { DefaultValue, atom, selector } from "recoil";

export const persistIdState = atom<boolean>({
  key: "persistId",
  default: false,
});

export const togglePersistIdState = selector({
  key: "togglePersistId",
  get: ({ get }) => get(persistIdState),
  set: ({ set, get }, newValue) => {
    if (newValue instanceof DefaultValue) {
      const currState = get(persistIdState);
      set(persistIdState, !currState);
    } else {
      set(persistIdState, newValue);
    }
  },
});
