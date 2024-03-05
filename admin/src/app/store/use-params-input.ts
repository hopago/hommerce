import create from "zustand";

type Field = {
  name: string;
  valueType: string;
  value: string;
};

interface CreatorUseParamsInput {
  field: {
    query?: Field;
    path?: Field;
  };
  setField: (params: Field & { requestType: "query" | "path" }) => void;
}

export const useParamsInput = create<CreatorUseParamsInput>((set) => ({
  field: {},
  setField: ({ requestType, name, valueType, value }) =>
    set((state) => ({
      ...state,
      [requestType]: {
        ...state.field[requestType],
        name,
        valueType,
        value,
      },
    })),
}));
