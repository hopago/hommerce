import { create } from "zustand";

interface CreatorUseSelectReview {
  ids: string[];
  totalLength: number | null;
  currSelected: number;
  isSelectedAll: boolean;
  setTotalLength: (length: number) => void;
  toggleId: (userId: string) => void;
  toggleSelectAll: (userIds: string[]) => void;
  resetState: () => void;
}

export const useSelectReview = create<CreatorUseSelectReview>((set) => ({
  ids: [],
  totalLength: null,
  currSelected: 0,
  isSelectedAll: false,
  setTotalLength: (length: number) => {
    set(() => ({
      totalLength: length,
    }));
  },
  toggleSelectAll: (userIds: string[]) => {
    set((state) => {
      const isSelectedAll = state.currSelected === userIds.length;

      if (isSelectedAll) {
        return {
          ...state,
          isSelectedAll: false,
          currSelected: 0,
          ids: [],
        };
      } else {
        return {
          ...state,
          isSelectedAll: true,
          currSelected: userIds.length,
          ids: userIds,
        };
      }
    });
  },
  toggleId: (userId: string) => {
    set((state) => {
      if (!state.ids.length) {
        return { ...state, ids: [userId] };
      } else {
        const newIds = state.ids.includes(userId)
          ? state.ids.filter((id) => id !== userId)
          : [...state.ids, userId];

        newIds.length === state.totalLength
          ? (state.isSelectedAll = true)
          : (state.isSelectedAll = false);

        return { ...state, ids: newIds, currSelected: newIds.length };
      }
    });
  },
  resetState: () =>
    set({
      ids: [],
      totalLength: null,
      currSelected: 0,
      isSelectedAll: false,
    }),
}));
