import { create } from "zustand";

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
  setField: (params: Field & { paramsType: "query" | "path" }) => void;
}

export const useParamsInput = create<CreatorUseParamsInput>((set) => ({
  field: {
    query: { name: "", valueType: "", value: "" },
    path: { name: "", valueType: "", value: "" },
  },
  setField: ({ paramsType, name, valueType, value }) =>
    set((state) => ({
      ...state,
      field: {
        ...state.field,
        [paramsType]: {
          name,
          valueType,
          value,
        },
      },
    })),
}));
