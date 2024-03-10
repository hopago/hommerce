import { toast } from "sonner";

import { create } from "zustand";

interface CreatorUseManageUsers {
  usernames: string[] | null;
  activeUser: string | null;
  error: boolean;
  errMsg: string | null;
  addUsername: (username: string | string[]) => void;
  removeUsername: (username: string) => void;
  setActiveUser: (username: string) => void;
  onMutate: (username: string) => void;
  resetState: () => void;
}

export const useManageUsers = create<CreatorUseManageUsers>((set) => ({
  usernames: null,
  activeUser: null,
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
  setActiveUser: (username: string) =>
    set({
      activeUser: username,
    }),
  onMutate: (username: string) => {
    const mutatedUsername = username;
    set((state) => {
      const prevUsername = state.activeUser;

      const prevIdx = state.usernames?.findIndex(
        (name) => name === prevUsername
      );
      if (prevIdx !== -1) {
        state.usernames?.splice(prevIdx!, 1, mutatedUsername);
      } else {
        toast.error("유저 관리 탭을 설정하지 못했어요.");
      }

      return {
        ...state,
      };
    });
  },
  resetState: () =>
    set({ usernames: null, activeUser: null, error: false, errMsg: null }),
}));
