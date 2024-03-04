import { create } from "zustand";

interface CreatorPagination {
  currentPage: number;
  handlePrevPage: () => void;
  handleNextPage: (pageTotal: number) => void;
  handleSetPage: (pageNum: number) => void;
  handleMoveToFirstPage: () => void;
  handleMoveToLastPage: (pageTotal: number) => void;
}

export const useCreatorPagination = create<CreatorPagination>((set) => ({
  currentPage: 1,
  handlePrevPage: () =>
    set((state) => ({
      currentPage:
        state.currentPage > 1 ? state.currentPage - 1 : state.currentPage,
    })),
  handleNextPage: (pageTotal: number) =>
    set((state) => ({
      currentPage:
        state.currentPage < pageTotal
          ? state.currentPage + 1
          : state.currentPage,
    })),
  handleSetPage: (pageNum: number) =>
    set({
      currentPage: pageNum,
    }),
  handleMoveToFirstPage: () =>
    set({
      currentPage: 1,
    }),
  handleMoveToLastPage: (pageTotal: number) =>
    set({
      currentPage: pageTotal,
    }),
}));
