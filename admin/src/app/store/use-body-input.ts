import { create } from "zustand";

type CreatorUseBodyInput = {
  inputValue: string;
  parsedValue: any;
  error: boolean;
  errMsg: string | null;
  setInputValue: (value: string) => void;
  parseInputValue: () => void;
  resetErrorState: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const useBodyInput = create<CreatorUseBodyInput>((set) => ({
  inputValue: "",
  parsedValue: null,
  error: false,
  errMsg: null,
  handleInputChange: (e) => {
    const value = e.target.value;
    set((state) => {
      state.setInputValue(value);
      return state;
    });
  },
  parseInputValue: () =>
    set((state) => {
      try {
        const parsedValue = JSON.parse(state.inputValue);
        return { ...state, parsedValue, error: false, errMsg: null };
      } catch (error) {
        return {
          ...state,
          error: true,
          errMsg: "적합하지 않은 JSON 형식입니다.",
        };
      }
    }),
  setInputValue: (value) =>
    set((state) => {
      state.inputValue = value;
      try {
        const parsedValue = JSON.parse(value);
        return { ...state, parsedValue, error: false, errMsg: null };
      } catch (error) {
        return {
          ...state,
          error: true,
          errMsg: "적합하지 않은 JSON 형식입니다.",
        };
      }
    }),
  resetErrorState: () =>
    set((state) => ({ ...state, error: false, errMsg: null })),
}));
