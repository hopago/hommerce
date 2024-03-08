import { create } from "zustand";

interface CreatorUseManageUsers {
  usernames: string[] | null;
  error: boolean;
  errMsg: string | null;
  addUsername: (username: string | string[]) => void;
  removeUsername: (username: string) => void;
  resetState: () => void;
}

export const useManageUsers = create<CreatorUseManageUsers>((set) => ({
  usernames: null,
  error: false,
  errMsg: null,
  addUsername: (username) => {
    set((state) => {
      const { usernames } = state;

      const isExist = usernames?.some((name) => name === username);
      if (isExist) return state;

      if (Array.isArray(username)) {
        return {
          ...state,
          usernames: usernames ? [...usernames, ...username] : username,
        };
      } else {
        return {
          ...state,
          usernames: usernames ? [...usernames, username] : [username],
        };
      }
    });
  },
  removeUsername: (username: string) =>
    set((state) => {
      const { usernames } = state;
      if (!usernames) {
        return { ...state, error: true, errMsg: "유저가 존재하지 않습니다." };
      }

      const newUsernames = usernames.filter((name) => name !== username);

      if (newUsernames.length === usernames.length) {
        return { ...state, error: true, errMsg: "유저를 찾지 못했어요." };
      }

      if (Array.isArray(newUsernames) && !newUsernames.length) {
        return { ...state, usernames: null };
      }

      return { ...state, usernames: newUsernames };
    }),
  resetState: () => set({ usernames: null, error: false, errMsg: null }),
}));
