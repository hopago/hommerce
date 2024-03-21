import { atom } from "recoil";

export const selectedBookState = atom<IBook[]>({
  key: "selectedBookState",
  default: [],
});
