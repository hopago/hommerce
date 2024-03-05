import create from "zustand";

type CreatorUseBodyInput = {
  field: { body: string };
  error: boolean;
  errMsg: string | null;
  setField: (body: string) => void;
  setError: (error: boolean) => void;
  setErrMsg: (errMsg: string | null) => void;
  resetErrState: () => void;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const useBodyInput = create<CreatorUseBodyInput>((set) => ({
  field: { body: "" },
  error: false,
  errMsg: null,
  setField: (body) => set((state) => ({ ...state, field: { body } })),
  setError: (error) => set((state) => ({ ...state, error })),
  setErrMsg: (errMsg) => set((state) => ({ ...state, errMsg })),
  resetErrState: () =>
    set((state) => ({ ...state, error: false, errMsg: null })),
  handleInputChange: (e) => {
    set((state) => {
      state.resetErrState();
      try {
        const parsedValue = JSON.parse(e.target.value);
        return { ...state, field: { body: parsedValue } };
      } catch (error) {
        return {
          ...state,
          error: true,
          errMsg: "적합하지 않은 JSON 형식입니다.",
        };
      }
    });
  },
}));
