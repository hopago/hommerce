import { atom } from "recoil";

export const selectedBookState = atom<TBook[]>({
  key: "selectedBookState",
  default: [],
});
