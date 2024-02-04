import { DefaultValue, atom, selector } from "recoil";

export const showGNBModalState = atom<boolean>({
  key: "gnbModal",
  default: false,
});

export const GNBModalState = selector({
  key: "toggleGNBModal",
  get: ({ get }) => get(showGNBModalState),
  set: ({ set, get }, newValue) => {
    if (newValue instanceof DefaultValue) {
      const currState = get(showGNBModalState);
      set(showGNBModalState, !currState);
    } else {
      set(showGNBModalState, newValue);
    }
  },
});
