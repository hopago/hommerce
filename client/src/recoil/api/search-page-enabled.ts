import { atom } from "recoil";

export const searchPageEnabled = atom<boolean>({
  key: "searchPageEnabled",
  default: true,
});
